<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Rules\MatchOldPassword;


class UsersController extends Controller
{
    public function me()
    {
        // return new UserResource(Auth::user());//default format data
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
    }

}
