<?php

namespace App\Http\Controllers;

use App\Models\InvitatioinHierarchy;
use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class InvitatioinHierarchyController extends Controller
{
    public function getInviteRoleId()
    {
       
        $loggedInRoleId =Auth::user()->roles->pluck('id');
        $inviteToRoleId =InvitatioinHierarchy::where('logged_in_role_id',$loggedInRoleId)->first();
        return response()->json($inviteToRoleId);
    }
}
