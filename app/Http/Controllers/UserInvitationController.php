<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Models\UserInvitation;
use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class UserInvitationController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(UserInvitation::with('inviteuser','inviterole')->get());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => ['unique:user_invitations,email,NULL,id,role_id,' . $request->role_id],
           
        ],
        [
            'email.unique' => 'This Email Invitation is already sent with seletcted Role',
        ]);
        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->toJson()], 400);
        }
        $tokenValidity =Carbon::now()->addHours(48);
                UserInvitation::create(array_merge(
                    $validator->validated(),
                [
                'code'=>Str::random(20),
                'email'=>$request->email,
                'role_id'=>$request->role_id,
                'sender_user_id' =>Auth::user()->id,
                'valid_till'=>$tokenValidity
                ]
            ));
                
     return response()->json(['success' =>'Invite send Successfully']);    
            
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserInvitation  $userInvitation
     * @return \Illuminate\Http\Response
     */
    public function show(UserInvitation $userInvitation)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserInvitation  $userInvitation
     * @return \Illuminate\Http\Response
     */
    public function edit(UserInvitation $userInvitation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserInvitation  $userInvitation
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserInvitation $userInvitation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserInvitation  $userInvitation
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserInvitation $userInvitation)
    {
        //
    }
}
