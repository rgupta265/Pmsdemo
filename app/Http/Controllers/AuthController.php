<?php

namespace App\Http\Controllers;

use JWTAuth;
use Carbon\Carbon;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\UserInvitation;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Notifications\WelcomeNotification;
use Illuminate\Support\Facades\Notification;
use App\Notifications\WelcomeNotificationMessageToInvitedByUser;

class AuthController extends Controller
{
    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()->toJson()], 400);
        }

        if (! $token = JWTAuth::attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $check =User::where('email',$request->email)->first();
        if($check->status == 0)
        {
            return response()->json(['error'=>$validator->errors()->add('warning', 'Your Account is Deactive.Please contact your administrator')->toJson()], 400); 
        }
        if($check->status == 2)
        {
            return response()->json(['error'=>$validator->errors()->add('warning', 'Your Account is Suspended.Please contact your administrator')->toJson()], 400); 
        }
        return $this->createNewToken($token);
    }

    public function register(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|confirmed|',
        ]);

        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->toJson()], 400);
        }

        //gerData
        $email =$request->email;
        $token =$request->invitetoken;
        $curretDateTime = Carbon::now()->toDateTimeString();
        $getInvite = UserInvitation::where(['email' => $email, 'code' => $token])->first();
        
        if($getInvite->valid_till < $curretDateTime)
        {
            $getInvite->update('status','expired');
            return response()->json(['error' => 'Token is Expired'], 401);
        }

        if(($getInvite->valid_till > $curretDateTime) && $getInvite->status=='pending')
        {

            DB::beginTransaction();

                try {
                    $user = User::create(array_merge(
                        $validator->validated(),
                        [
                            'name'=> $request->name,
                            'email'=> $request->email,
                            'password' => Hash::make($request->password),
                        ]
                    ));
                    $role=$user->roles()->attach($getInvite->role_id);//assign user to roleId
                    $permissions =DB::table('roles_permissions')->where('role_id',$getInvite->role_id)->get()->pluck('permission_id');
                    $user->permissions()->attach($permissions);//assign permissionId to user
                    $getInvite->update(['status'=>'successful','user_id'=>$user->id]);
                    DB::commit();
                    //send Welcome Email
                    $email =$user->email;
                    $roleName =Role::find($getInvite->role_id);
                    $dataUser =[
                        'name'=>$user->name,
                        'role_name'=>Str::upper($roleName->name),
                        'email'=>$email,
                    ];
                    $invitedByUser = User::find($getInvite->sender_user_id); //get invited by user
                    $dataInvited =[
                        'invitedByName'=>$invitedByUser->name,
                        'invitedToName'=>$user->name,
                        'invitedToRole'=>Str::upper($roleName->name),
                        'invitedToEmail'=>$email,
                    ];
    
                    Notification::route('mail', $email)//here mail is basically via notifiable method inside Noificationclass it can be ['mail','database','sms'].pass multiple also with new route('database','email')
                    ->notify(new WelcomeNotification($dataUser));
                    // Notification::send($email, new WelcomeNotification($dataUser));//register user
                    $invitedByUser->notify(new WelcomeNotificationMessageToInvitedByUser($dataInvited));//store notification in table (invited by)
                    return response()->json(['success' => 'User Created and Permission assigned successful'], 200);
                } catch (\Exception $e) {
                    DB::rollback();
                    return response()->json(['error'=>$validator->errors()->add('warning', 'Something Went Wrong.It may be due to user assigned roles/permission')->toJson()], 400);
                }
                

            
        }

        else{
            return response()->json(['error'=>$validator->errors()->add('warning','Something Went Wrong.It must be due to Token Mismatch/Absent')->toJson()]);
        }
        


        
      
            
    }

    protected function createNewToken($token){
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'user' => auth()->user()
        ]);
    }


    public function getUser(Request $request)
    {
        return response()->json($request->user());
    }

    public function refresh() {
        return $this->createNewToken(auth()->refresh());
    }

}
