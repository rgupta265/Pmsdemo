<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {

       
        $userRoles = $this->roles()->with('permissions')->get();
        $roles = $userRoles->pluck('slug');
        // $rolesPermissions = $userRoles->pluck('permissions')->flatten(1)->pluck('slug');
        $rolesPermissions = array_column($userRoles->pluck('permissions')->toArray(),'slug');
        // $userPermissions = $rolesPermissions->merge($this->permissions->pluck('slug'));
        $userPermissions = array_merge($rolesPermissions,$this->permissions->pluck('slug')->toArray());
        return [
            'id' => $this->id,
            'name' => $this->name, 
            'email' => $this->email,
            'created_at' => $this->created_at->format('Y-m-d'),
            'roles' => $roles,
            'permissions' => $userPermissions,
            // 'userRoles' => $userRoles,
        ];
    }
}
