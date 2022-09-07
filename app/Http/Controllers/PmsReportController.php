<?php

namespace App\Http\Controllers;

use App\Models\PmsReport;
use Illuminate\Support\Str;
use App\Models\PmsAttribute;
use Illuminate\Http\Request;
use App\Models\UserInvitation;
use App\Models\PmsReportDetails;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PmsReportController extends Controller
{
    
   public function getLoggedInUser()
    {
        $data['loggedInRoleName'] = Auth::user()->roles->pluck('slug');
        $data['loggedInUserId'] = Auth::user()->id;
        return $data;
    }
    public function getAllJoinedUser()
    {
        if($this->getLoggedInUser()['loggedInRoleName'][0] =='admin')
        {
            $data =UserInvitation::where('status','successful')
            ->with('inviteuser:id,name,email','inviterole:id,name,slug','userDetails:id,name,email','userMoreInfo')
            ->paginate(10);
        }
        else{
            $data =UserInvitation::with('inviteuser:id,name,email','inviterole:id,name,slug','userDetails:id,name,email','userMoreInfo')
            ->where(['sender_user_id'=>$this->getLoggedInUser()['loggedInUserId'],
            'status' => 'successful'])
            ->paginate(10);
        }
        return response()->json($data);
    }

    public function getUserDetailByCode($code)
    {
        $data =UserInvitation::where('code',$code)
        ->with('userDetails','inviterole:id,name,slug','userMoreInfo')
        ->first();

        return response()->json($data);
    
    }
    public function getAllPmsAttribute()
    {
        return response()->json(PmsAttribute::where('status',1)->get());
    }
    public function CreateNewReport(Request $request)
    {
        $emp_code = $request->reportData['emp_code'];
        $reportCycle =$request->reportData['reportCycle'];
        $pmsRatingToUserid =$request->reportData['userId'];
        if(!$emp_code)
        {
            $emp_code ="DUMMYGWL".$pmsRatingToUserid;
        } 
        $uniqueRepordId ="REP-".$reportCycle."-".$emp_code;
        $validator = Validator::make($request->all(),[
            // 'startDate' => 'required',
        ]);
        if($validator->fails()){
            return response()->json(['error'=>$validator->errors()->toJson()], 400);
        }
        DB::beginTransaction();

        try {
        //insert intopmsreport
            $reportData =[
                'report_id' => $uniqueRepordId,
                'token'=>Str::random(20),
                'emp_code' => $emp_code,
                'report_duration_from' => $request->reportData['startDate'],
                'report_cycle' => $reportCycle,
                'report_duration_to' => date("Y-m-d",strtotime($request->reportData['endDate'])),
                'remarks' => $request->reportData['remarks'],
                'pms_rating_to_user_id' => $pmsRatingToUserid,
                'pms_rating_by_user_id' => $this->getLoggedInUser()['loggedInUserId'],
            ];
            $addData=PmsReport::create($reportData);
            
            //create into Pmsreportdetails
            
            $DetailedReport = [];
        
            for ($i = 0; $i < count($request->pmsData); $i++) {
            $DetailedReport[] = [
                'report_id' => $addData->report_id,
                'pms_attributes_id' => $request->pmsData[$i]['pms_attr_id'],
                'pms_attributes_rating' => $request->pmsData[$i]['rating'],
                'pms_attributes_comment' => $request->pmsData[$i]['comments'],
                'created_at' => now(),
                'updated_at' => now()
            ];   
        }
        DB::commit();
        PmsReportDetails::insert($DetailedReport);
            return response()->json(['success'=>'New Report Created Successfully']);
        } catch (\Exception $e) {
            DB::rollback();
            return response()->json(['error'=>$validator->errors()->add('warning', 'Something Went Wrong.It may be due to report creation')->toJson()], 400);
        }
    }

    public function getAllReportListByUserId()
    {
        if($this->getLoggedInUser()['loggedInRoleName'][0] =='admin')
        {
            $data =PmsReport::where('status','1')->with('userReportInfo:id,name,email')->latest()
            ->paginate(10);
        }
        else{
            $data =PmsReport::where(['status'=>'1','pms_rating_by_user_id'=>Auth::user()->id])->with('userReportInfo:id,name,email')->latest()
            ->paginate(10);
        }
        return response()->json($data);
    }

    public function getMyProgressReport()
    {
     $data =PmsReport::where(['status'=>'1','pms_rating_to_user_id'=>Auth::user()->id])->with('userReportInfo:id,name,email')->latest()
        ->paginate(10);

        return response()->json($data);
    }
    

    
}
