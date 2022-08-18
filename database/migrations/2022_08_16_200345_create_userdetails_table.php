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
            $table->string('image');
            $table->string('emp_code')->unique();
            $table->string('designation');
            $table->string('father_name');
            $table->text('address');
            $table->text('correspondence_address');
            $table->biginteger('phone');
            $table->biginteger('emergency_contactno');
            $table->string('linkedin_id')->unique();
            $table->enum('status', ['0', '1'])->default(1);
            $table->integer('added_by');
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
