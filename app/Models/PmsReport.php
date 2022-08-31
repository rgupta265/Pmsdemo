<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;
use Illuminate\Notifications\Notifiable;

class PmsReport extends Model
{
    use HasFactory,LogsActivity,Notifiable;
    protected $fillable = [
        'report_id',
        'emp_code',
        'report_duration_from',
        'report_cycle',
        'report_duration_to',
        'remarks',
        'pms_rating_to_user_id',
        'pms_rating_by_user_id',
        'status'
    ];
    protected static $logName = 'report';
    protected static $logAttributes = ['report_id','emp_code',
    'report_duration_from',
    'report_cycle',
    'report_duration_to',
    'remarks',
    'pms_rating_to_user_id',
    'pms_rating_by_user_id',
    'status'];
    public function userReportInfo()
    {
      return $this->belongsTo(User::class,'pms_rating_to_user_id');
    }
    public function reportDetailInfo()
    {
        return $this->hasMany(PmsReportDetails::class,'report_id','report_id',);
    }
}
