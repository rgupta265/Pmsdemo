<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use App\Traits\HasPermissionsTrait;

class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable, HasPermissionsTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function getJWTIdentifier() {
        return $this->getKey();
    }

    public function getJWTCustomClaims() {
        return [];
    }

    public function roles() {

        return $this->belongsToMany(Role::class,'users_roles');
    
    }
 

    public function hasRole( ... $roles ) {
                //$user->hasRole('admin','user)
        return $this->roles->where('slug', $roles)->count();
    }

    public function permissions() {

        return $this->belongsToMany(Permission::class,'users_permissions');
    
        }

}
