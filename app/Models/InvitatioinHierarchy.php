<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InvitatioinHierarchy extends Model
{
    use HasFactory;
    protected $fillable =['logged_in_role_id','invite_to_role_id','status'];
    protected static $logAttributes = ['logged_in_role_id','invite_to_role_id','status'];
}
