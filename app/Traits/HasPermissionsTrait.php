<?php 
namespace App\Traits;

use App\Models\Permission;
use App\Models\Role;

trait HasPermissionsTrait {

    public function hasPermissionTo($permissions) {
        //$user->hasPermissionTo('edit-user','delete-user')
        return $this->permissions->where('slug', $permissions)->count() ||
        $this->roles()->whereHas('permissions',function ($q) use ($permissions){
            $q->whereIn('slug',$permissions);
        })->count();
    }
    
    private function getPermissionIdsbyslug($permissions){
     return Permission::whereIn('slug',$permissions)->get()->pluck('id')->toArray();
    }

    public function givePermissionTo(...$permissions){
      $this->permissions()->attach($this->getPermissionIdsbyslug($permissions));
    }

    public function setPermissions(...$permissions){
      $this->permissions()->sync($this->getPermissionIdsbyslug($permissions));
    }

    public function detachPermissions(...$permissions){
      $this->permissions()->detach($this->getPermissionIdsbyslug($permissions));
    }

}