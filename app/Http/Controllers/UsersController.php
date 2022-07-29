<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Auth;


class UsersController extends Controller
{
    public function me()
    {
        // return new UserResource(Auth::user());//default format data
        return new UserResource(Auth::user());//modified data collection/mapping
    }

}
