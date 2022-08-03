<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class WebsiteMasterInfo extends Controller
{
    public function getWebinfo(Request $request)
    {
        $data =[
            'web_name'=>'PMS',
            'company_name'=>'Galaxy Weblinks Ltd.',
            'company_email'=>'galaxyweblinks.in',
            'company_website'=>'https://www.galaxyweblinks.com/'
        ];
        return response()->json($data);
    }
}
