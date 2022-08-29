<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePmsReportDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pms_report_details', function (Blueprint $table) {
            $table->increments('id');
            $table->string('report_id');
            $table->foreign('report_id')->references('report_id')->on('pms_reports')->onDelete('cascade');
            $table->unsignedInteger('pms_attributes_id');
            $table->foreign('pms_attributes_id')->references('id')->on('pms_attributes');
            $table->integer('pms_attributes_rating');
            $table->text('pms_attributes_comment')->nullable();
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
        Schema::dropIfExists('pms_report_details');
    }
}
