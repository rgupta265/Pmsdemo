<?php

namespace App\Http\Controllers;

use App\Models\Permission;
use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Hash;
use Illuminate\Support\Facades\Validator;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Permission::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required','unique:permissions,name'],
            // 'permission' => ['nullable']
        ]);

        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->toJson()], 400);
        }

        $per = Permission::create(array_merge(
            $validator->validated(),
            [
                'name' => $request->name,
                'slug'=>Str::slug($request->name)
            ]
        ));

        if($per)
        {
            return response()->json(['success'=>'Permission Added Successfully.']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function show(Permission $permission)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function edit(Permission $permission)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Permission $permission)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required','unique:permissions,name'],
        ]);

        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->toJson()], 400);
        }

       $update= $permission->update([
            'name'=>$request->name,
            'slug'=>Str::slug($request->name)
        ]);
        if($update){
            return response()->json(['success'=>'Permission Updated Successfully']);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Permission  $permission
     * @return \Illuminate\Http\Response
     */
    public function destroy(Permission $permission)
    {
        $permission->delete();

        return response()->json(['success'=>'Permission Deleted Successfully']);
    }
    public function getAllPermissions(){
        $permissions = Permission::all();

        return response()->json([
            'permissions' => $permissions
        ], 200);
    }
    //insert dummy data
    public function Permission()
    {
    $developer_permission = Permission::where('slug','view-pms-master')->first();
    $admin_permission = Permission::where('slug', 'view-invite-link')->first();
    $employee_permission = Permission::where('slug', 'view-user-role-permission-management')->first();

    //RoleTableSeeder.php
    $user_role = new Role();
    $user_role->slug = 'developer';
    $user_role->name = 'Developer_name';
    $user_role->save();
    $user_role->permissions()->attach($developer_permission);

    $admin_role = new Role();
    $admin_role->slug = 'admin';
    $admin_role->name = 'Admin_Name';
    $admin_role->save();
    $admin_role->permissions()->attach($admin_permission);

    $admin_role = new Role();
    $admin_role->slug = 'employee';
    $admin_role->name = 'Employee_Name';
    $admin_role->save();
    $admin_role->permissions()->attach($employee_permission);

    $developer_role = Role::where('slug','developer')->first();
    $admin_role = Role::where('slug', 'admin')->first();
    $employee_role = Role::where('slug', 'employee')->first();

    $createTasks = new Permission();
    $createTasks->slug = 'view-pms-master';
    $createTasks->name = 'View PMS Master';
    $createTasks->save();
    $createTasks->roles()->attach($developer_role);

    $editUsers = new Permission();
    $editUsers->slug = 'view-invite-link';
    $editUsers->name = 'View Invite Link';
    $editUsers->save();
    $editUsers->roles()->attach($admin_role);

    $userManagement = new Permission();
    $userManagement->slug = 'view-user-role-permission-management';
    $userManagement->name = 'View Role Management';
    $userManagement->save();
    $userManagement->roles()->attach($employee_role);

    $developer_role = Role::where('slug','user')->first();
    $admin_role = Role::where('slug', 'admin')->first();
    $employee_role = Role::where('slug', 'employee')->first();

    $developer_perm = Permission::where('slug','view-pms-master')->first();
    $admin_perm = Permission::where('slug', 'view-invite-link')->first();
    $employee_perm = Permission::where('slug', 'view-user-role-permission-management')->first();


    $user = new User();
    $user->name = 'RG(Developer)';
    $user->email = 'developer@gmail.com';
    $user->password = Hash::make('12345678');
    $user->save();
    $user->roles()->attach($developer_role);
    $user->permissions()->attach($developer_perm);

    $admin = new User();
    $admin->name = 'Vijay(Admin)';
    $admin->email = 'admin@gmail.com';
    $admin->password = Hash::make('12345678');
    $admin->save();
    $admin->roles()->attach($admin_role);
    $admin->permissions()->attach($admin_perm);

    $employee = new User();
    $employee->name = 'Mayank(Employee)';
    $employee->email = 'employee@gmail.com';
    $employee->password = Hash::make('12345678');
    $employee->save();
    $employee->roles()->attach($employee_role);
    $employee->permissions()->attach($employee_perm);

    return redirect()->back();
    }
}
