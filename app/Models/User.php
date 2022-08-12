<?php

namespace App\Models;

use App\Traits\HasPermissionsTrait;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Spatie\Activitylog\Traits\LogsActivity;


class User extends Authenticatable implements JWTSubject
{
    use HasFactory, Notifiable, HasPermissionsTrait, SoftDeletes, LogsActivity;

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

    protected static $logAttributes = ['name', 'email','password'];

    public function getJWTIdentifier() {
        return $this->getKey();
    }

    public function getJWTCustomClaims() {
        return [];
    }
        //if user have multiple role
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
    public function invitations()
    {
        return $this->belongsToMany(UserInvitaion::class,'sender_user_id');
    }

}
