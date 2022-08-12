<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PmsAttribute extends Model
{
    use HasFactory;
    protected $fillable = ['title','slug','max_rating','added_by','status'];
    public function roles() {

        return $this->belongsToMany(Role::class,'roles_permissions');
            
     }
     
     public function users() {
     
        return $this->belongsToMany(User::class,'users_permissions');
            
     }
     
     public function pmsattribute()
     {
        return $this->belongsToMany(PmsAttribute::class,'users_permissions');
     }
     public function userInfo()
    {
        return $this->belongsTo(User::class,'added_by');
    }
}
