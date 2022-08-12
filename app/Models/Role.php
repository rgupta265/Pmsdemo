<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Traits\HasPermissionsTrait;
use Spatie\Activitylog\Traits\LogsActivity;
class Role extends Model
{
    use HasFactory,HasPermissionsTrait,LogsActivity;

    protected $fillable =['name','slug'];
    protected static $logName = 'role';
    protected static $logAttributes = ['name', 'slug'];


    public function permissions() {

        return $this->belongsToMany(Permission::class,'roles_permissions');

     }

     public function hasPermissionTo($permissions) {
      //$role->hasPermissionTo('edit-user','delete-user')
      return $this->permissions()->where('slug', $permissions)->count();
   }


}
