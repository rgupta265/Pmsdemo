<?php

namespace App\Http\Controllers\UniversalApi;

use App\Http\Controllers\Controller;
use App\Models\PmsReport;
use Illuminate\Http\Request;

class GettersUniversalApiController extends Controller
{
    public function getAllReportDetailsByReportCode(Request $request)
    {
        $data =PmsReport::with(['userReportInfo.roles','userReportInfo.userMoreInfo','reportDetailInfo.attributes','reportGeneratedByUserInfo.roles','reportGeneratedByUserInfo.userMoreInfo'])->where('token',$request->code)->first();
        return response()->json($data);
        //here dot represent with relationship declare inside particulaar model Eg PMS report relationship with userInfo and this user get info of roles which already declare in User model
    }
    public function getAllUserInfoByUserCode()
    {

    }

    
}
