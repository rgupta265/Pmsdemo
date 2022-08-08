<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserInvitationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_invitations', function (Blueprint $table) {
            $table->BigIncrements('id');
            $table->string('code')->index();
            $table->string('email');
            $table->BigInteger('role_id')->unsigned()->foreign('role_id')->references('id')->on('roles')->onDelete('cascade');
            $table->BigInteger('sender_user_id')->unsigned()->foreign('sender_user_id')->references('id')->on('users')->onDelete('cascade');
            $table->enum('status', ['pending', 'successful','canceled','expired'])->default('pending');
            $table->datetime('valid_till');            
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
        Schema::dropIfExists('user_invitations');
    }
}
