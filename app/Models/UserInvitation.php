<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserInvitation extends Model
{
    use HasFactory;

    protected $fillable =['code','email','role_id','sender_user_id','status','valid_till'];
    protected static $logAttributes = ['code','email','role_id','sender_user_id','status','valid_till'];


    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
