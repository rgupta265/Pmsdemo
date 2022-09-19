<?php

namespace App\Http\Controllers\UniversalApi;

use App\Models\PmsReport;
use Illuminate\Http\Request;
use App\Models\UserInvitation;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Spatie\Activitylog\Models\Activity;

class DashboardController extends Controller
{

    public function getLoggedInUserActivity()
    {
        $activity = Activity::where('causer_type', 'App\Models\User')->where('causer_id', Auth::user()->id)->latest('created_at')->get();
        
        return response()->json($activity);
    }
    public function myDashboardData()
    {
        $userId =Auth::user()->id;
        //for admin/master data only
        $data['master_invite'] =UserInvitation::count();
        $data['master_joined'] =UserInvitation::where(['status'=>'successful'])->count();
        $data['master_create_report'] =PmsReport::count();

        //for all user common data
        $data['total_invite'] =UserInvitation::where('sender_user_id', $userId)->count();
        $data['joined'] =UserInvitation::where(['sender_user_id'=> $userId,'status'=>'successful'])->count();
        $data['total_create_report'] =PmsReport::where(['pms_rating_by_user_id'=> $userId])->count();
        $data['total_my_report'] =PmsReport::where(['pms_rating_to_user_id'=> $userId])->count();
        return response()->json($data);
    }
}
