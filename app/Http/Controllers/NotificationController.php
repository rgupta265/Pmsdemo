<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\UserInvitation;
use Illuminate\Support\Facades\DB;

class NotificationController extends Controller
{
    public function getAllNotification()
    {
        $user = auth()->user();
        return response()->json($user->unreadNotifications);//unreadNotifications or notifications
    }
}
