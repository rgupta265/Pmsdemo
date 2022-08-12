<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    use HasFactory;

    protected $fillable =['name','slug'];
    protected static $logName = 'permission';
    protected static $logAttributes = ['name', 'slug'];
    public function roles() {

        return $this->belongsToMany(Role::class,'roles_permissions');

     }

     public function users() {

        return $this->belongsToMany(User::class,'users_permissions');

     }
}
