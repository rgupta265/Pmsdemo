<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Models\Permission;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Gate;

class PermissionsServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        // $permissions = Permission::all();

        // try {
        //     foreach($permissions as $permission) {
        //         Gate::define($permission->slug, function ($user) use ($permission) {
        //             return $user->hasPermissionTo($permission);
        //         });
        //     }
        // } catch (\Exception $e) {
        //     report($e);
        //     return false;
        // }

    }
}
