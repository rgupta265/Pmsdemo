<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\Models\Activity;


class DashboardController extends Controller
{
    public function getLoggedInUserActivity()
    {
        $activity = Activity::where('causer_type', 'App\Models\User')->where('causer_id', Auth::user()->id)->latest('created_at')->get();
        
        return response()->json($activity);
    }
}
