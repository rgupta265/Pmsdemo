This Project Need Following requirement to start Project;
1.Composer install
2.npm install
3.php artisan migrate
4.npm run watch

hit "api/roles" to insert dummy data to check user base different permission
IT has JWT so You have to use it


Note: If you face to composer install any error please comment the following line in PermissionServiceProvider.php
declare inside boot function 
and after migarte table kindly oncomment this line

//create dummy data in this function.It use for tetsing user and their roles nad permisisions
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