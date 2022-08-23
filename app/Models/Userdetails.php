<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Userdetails extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'image',
        'emp_code',
        'designation',
        'father_name',
        'address',
        'correspondence_address',
        'phone',
        'emergency_contactno',
        'linkedin_id',
        'status',
        'added_by',
    ];
}
