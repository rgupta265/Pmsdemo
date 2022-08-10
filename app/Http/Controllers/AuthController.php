<?php

namespace App\Http\Controllers;

use JWTAuth;
use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\UserInvitation;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 422);
        }

        if (! $token = JWTAuth::attempt($validator->validated())) {
            return response()->json(['error' => 'Unauthorized'], 401);
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

            return response()->json(['success' => 'User Created and Permission assigned successful'], 200);
        }

        else{
            return response()->json(['error'=>'Something Went Wrong.It must be due to Token Mismatch/Absent']);
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
