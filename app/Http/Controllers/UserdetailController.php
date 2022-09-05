<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Userdetails;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Namshi\JOSE\Signer\OpenSSL\RSA;

class UserdetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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

      
        $userId =Auth::user()->id;
        $empCode= str_replace(' ', '', $request->emp_code);
        $empCode =Str::upper($empCode);
        
        $product = Userdetails::updateOrCreate(
            [ 'user_id' => $userId ],
            [ 'emp_code' => $empCode,
             'designation' => $request->designation,
             'father_name' => $request->father_name,
             'address' => $request->address,
             'correspondence_address' => $request->correspondence_address,
             'phone' => $request->phone,
             'emergency_contactno' => $request->emergency_contactno,
             'linkedin_id' => $request->linkedin_id,
             'joining_date' => date("Y-m-d",strtotime($request->joining_date)),
             'added_by' => $userId,
              ]
        );


        if($product){
            
            return response()->json(['success' =>'Profile Updated Successfully']);
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
    public function uploadProfileImage(Request $request)
    {
            $userId =Auth::user()->id;
            // echo"hi i am testing";die; 
            $validator = Validator::make($request->all(), [
                'image' => 'required|image:jpg,jpeg,png|max:1024',
                
           ],     
           [
               'image.required' => 'Image Must be Selected',
               // 'image.image' => 'The type of the uploaded file should be an image.',
           ]);
            $userData =Userdetails::select('id','emp_code')->where(['user_id' => $userId])->first();
            if(!$userData->emp_code)
            {
                $empCode ="DUMMYGWL";
            }
            else{
                $empCode = $userData->emp_code;
            }
                $imageName =$empCode.'-'.time();
               $fileName = $imageName.'.'.$request->image->extension();  
               $request->file('image')->storeAs('/public/ProfileImage', $fileName);
          

           $product = Userdetails::updateOrCreate(
            [ 'user_id' => $userId ],
            [ 
                'image' => $fileName,
                'added_by' => $userId
             ]
                );
         
   
            if($validator->fails()){
               return response()->json(['error'=>$validator->errors()->toJson()], 400);
           }
           if($product){
            
            return response()->json(['success' =>'Image Uploaded Successfully']);
        }
    }
}
