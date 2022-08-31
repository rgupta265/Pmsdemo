<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePmsReportsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pms_reports', function (Blueprint $table) {
            $table->increments('id');
            $table->string('report_id')->unique();
            $table->string('emp_code')->unique()->nullable();
            $table->enum('report_cycle', ['3M', '6M','12M'])->comment('M represents months here');
            $table->date('report_duration_from');
            $table->date('report_duration_to');
            $table->unsignedInteger('pms_rating_to_user_id')->comment('This Id represent those user whose report is being generated');
            $table->foreign('pms_rating_to_user_id')->references('id')->on('users')->onDelete('cascade');
            $table->unsignedInteger('pms_rating_by_user_id')->comment('This Id represent those user whoose this report is generated');;
            $table->foreign('pms_rating_by_user_id')->references('id')->on('users');
            $table->text('remarks')->nullable();
            $table->enum('status', ['0', '1'])->default(1)->comment('0 Indicates deactive and 1 indicates active');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('pms_reports');
    }
}
