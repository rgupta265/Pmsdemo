<?php

namespace App\Http\Controllers;

use App\Models\PmsReport;
use App\Models\PmsAttribute;
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

    public function getUserDetailByCode($code)
    {
        $data =UserInvitation::where('code',$code)
        ->with('userDetails','inviterole:id,name,slug','userMoreInfo')
        ->first();

        return response()->json($data);
    
    }
    public function getAllPmsAttribute()
    {
        return response()->json(PmsAttribute::where('status',1)->get());
    }

    
}
