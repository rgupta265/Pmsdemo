<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use Illuminate\Http\Request;
use App\Models\UserInvitation;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Notifications\Notification;

class NotificationController extends Controller
{
    public function getAllNotification()
    {
        $user = auth()->user();
        return response()->json($user->unreadNotifications);//unreadNotifications or notifications
    }
    public function marksAsRead($id)
    {
        
        DB::table('notifications')->where('id',$id)->update(['read_at'=>Carbon::now()]);
        return response()->json(['success'=>'Update Notification']);

    }
}
