<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
// use App\Traits\HasPermissionsTrait;


class RoleController extends Controller
{
  
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        $roles= Role::with('permissions')->latest()->paginate(10);
        return response()->json($roles);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
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
            'name' => ['required','unique:roles,name'],
            // 'permission' => ['nullable']
        ],
        [
            'name.required' => 'Role name is Mandatory',
            'name.unique' => 'This Role name is alreday Exist',
        ]);

        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->toJson()], 400);
        }
        
        $role = Role::create(array_merge(
            $validator->validated(),
            [
                'name' => $request->name,
                'slug'=>Str::slug($request->name)
            ]
        ));
        if($request->has("permission")){
            $role->permissions()->attach($request->permission);
        }
        if($role)
        {
            return response()->json(['success'=>'Role and Permission assigned Successfully.']);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function show(Role $role)
    {
        $role =Role::with('permissions')->where('id', $role->id)->first();
        return response()->json($role);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function edit(Role $role)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Role $role)
    {
        $validator = Validator::make($request->all(), [
            'name' => ['required'],
        ]);

        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->toJson()], 400);
        }
        
       $update = $role->update([
            'name'=>$request->name,
            'slug'=>Str::slug($request->name)
        ]);
        if($request->has("permission")){
            $role->permissions()->sync($request->permission);//syncWithoutDetaching
        }
        if($update){
            return response()->json(['success'=>'Role Updated Successfully']);
        }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Role  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role)
    {
        $role->delete();
        $role->permissions()->detach();
        
        return response()->json(['success'=>'Role and Permission Deleted Successfully']);
    }
}
