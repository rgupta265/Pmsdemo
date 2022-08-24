<?php

namespace App\Http\Controllers;

use App\Models\PmsReport;
use Illuminate\Http\Request;
use App\Models\UserInvitation;
use Illuminate\Support\Facades\Auth;

class PmsReportController extends Controller
{
    
    public function getAllJoinedUser()
    {
        $loggedInRoleName =Auth::user()->roles->pluck('slug');
        
        if($loggedInRoleName[0] =='admin')
        {
            $data =UserInvitation::where('status','successful')
            ->with('inviteuser:id,name,email','inviterole:id,name,slug','userDetails:id,name,email')
            ->paginate(10);
        }
        else{
            $data =UserInvitation::with('inviteuser:id,name,email','inviterole:id,name,slug','userDetails:id,name,email')
            ->where(['sender_user_id'=>Auth::user()->id,
            'status' => 'successful'])
            ->paginate(10);
        }
        return response()->json($data);
    }

    

    
}
