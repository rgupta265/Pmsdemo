<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
// use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class PmsAttribute extends Model
{
    use HasFactory;
    protected $fillable = ['title','slug','max_rating','added_by','status'];
     
     public function users() {
     
        return $this->belongsToMany(User::class,'users_permissions');
            
     }
     
     public function userInfo()
    {
        return $this->belongsTo(User::class,'added_by');
    }
}
