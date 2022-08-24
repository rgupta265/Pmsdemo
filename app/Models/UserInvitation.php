<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Notifications\Notifiable;


class UserInvitation extends Model
{
    use HasFactory,LogsActivity,Notifiable;

    protected $fillable =['code','email','role_id','sender_user_id','status','valid_till','user_id'];
    protected static $logName = 'invitation';
    protected static $logAttributes = ['email','role_id','sender_user_id','status','valid_till','user_id'];


    public function inviteuser()
    {
        return $this->belongsTo(User::class,'sender_user_id');
    }
    public function inviterole()
    {
        return $this->belongsTo(Role::class,'role_id');
    }
    public function userDetails()
    {
        return $this->belongsTo(User::class,'user_id');
    }
    


}
