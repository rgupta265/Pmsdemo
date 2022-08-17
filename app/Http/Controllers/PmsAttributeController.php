<?php

namespace App\Http\Controllers;


use Illuminate\Support\Str;
use App\Models\PmsAttribute;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;


class PmsAttributeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json(PmsAttribute::with('userInfo')->latest()->get());
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
            'name' => ['required','unique:pms_attributes,title'],
        ],
        [
            'name.required' => 'Attribute Name cannot be empty',
            'name.unique' =>'Attribute Name is Already Exists',
        ]
    );

        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->toJson()], 400);
        }
        
        $per = PmsAttribute::create(array_merge(
            $validator->validated(),
            [
                'title' => $request->name,
                'slug'=>Str::slug($request->name),
                'max_rating' => 5,
                'added_by' => Auth::user()->id
               
            ]
        ));
       
        if($per)
        {
            return response()->json(['success'=>'Pms Added Successfully.']);
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\PmsAttribute  $pmsattribute
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PmsAttribute $pmsattribute)
    {
      
            $validator = Validator::make($request->all(), [
                'name' => ['required','unique:pms_attributes,title'],
            ]);
    
            if($validator->fails()){
                return response()->json(['error'=>$validator->errors()->toJson()], 400);
            }
            
           $update= $pmsattribute->update([
                'title'=>$request->name,
                'max_rating' => 5,
                'added_by' => Auth::user()->id,
                'slug'=>Str::slug($request->name)
            ]);
            if($update){
                return response()->json(['success'=>'Pms Updated Successfully']);
            }
        
    }

    /**
     * Remove the specified resource from storage.
     *
     *  @param  \App\Models\PmsAttribute $pmsattribute
     * @return \Illuminate\Http\Response
     */
    public function destroy(PmsAttribute $pmsattribute)
    {
        $pmsattribute->delete();

        return response()->json(['success'=>'Permission Deleted Successfully']);
    }
}
