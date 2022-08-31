<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PmsReportDetails extends Model
{
    use HasFactory;
    protected $fillable = ['report_id','pms_attributes_id','pms_attributes_rating','pms_attributes_comment','status'];
    protected static $logName = 'reportDetails';
    protected static $logAttributes = ['report_id','pms_attributes_id','pms_attributes_rating','pms_attributes_comment','status'];
}
