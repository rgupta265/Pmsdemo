<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasPermissionsTrait;
class Role extends Model
{
    use HasFactory,HasPermissionsTrait;

    public function permissions() {

        return $this->belongsToMany(Permission::class,'roles_permissions');
            
     }

     public function hasPermissionTo($permissions) {
      //$role->hasPermissionTo('edit-user','delete-user')
      return $this->permissions()->where('slug', $permissions)->count();
   }

   public function scopeDeveloper($query){
      $this->query->where('slug','developer');
   }
   public function scopeAdmin($query){
      $this->query->where('slug','admin');
   }
     
   //   public function users() {
     
   //      return $this->belongsToMany(User::class,'users_roles');
            
   //   }
}
