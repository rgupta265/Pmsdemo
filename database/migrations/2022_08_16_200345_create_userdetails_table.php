<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserdetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('userdetails', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->string('image')->nullable();
            $table->string('emp_code')->unique();
            $table->string('designation')->nullable();
            $table->string('father_name')->nullable();
            $table->text('address')->nullable();
            $table->text('correspondence_address')->nullable();
            $table->biginteger('phone')->nullable();
            $table->biginteger('emergency_contactno')->nullable();
            $table->date('joining_date')->nullable();
            $table->string('linkedin_id')->unique();
            $table->enum('status', ['0', '1'])->default(1)->comment('0 Indicates resign and 1 indicates joined');
            $table->integer('added_by');
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
        Schema::dropIfExists('userdetails');
    }
}
