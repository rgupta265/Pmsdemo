<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class UsersController extends Controller
{
    public function me()
    {
        return new UserResource(Auth::user());//modified data collection/mapping
    }
    public function changePassword(Request $request){
       
        $validator = Validator::make($request->all(), [
            'new_password' => ['required', 'min:8'],
            'confirm_password' => ['same:new_password']
        ]);
        
        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->toJson()], 400);
        }
        $user = Auth::user();
        $user->password = Hash::make($request->get('new_password'));
        $updatepassword=$user->save();
        if($updatepassword)
        {
            return response()->json(['success'=>'Password Change Successful.Please Login with your new Password.']);
        }

    }

    public function getUserHasRolePermission()
    {
        $data = User::with('roles','permissions')->get();
        return response()->json(['data'=>$data]);
    }

}
