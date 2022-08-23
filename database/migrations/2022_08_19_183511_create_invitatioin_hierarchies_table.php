<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvitatioinHierarchiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invitatioin_hierarchies', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('logged_in_role_id');
            $table->unsignedInteger('invite_to_role_id');
            $table->foreign('logged_in_role_id')->references('id')->on('roles')->onDelete('cascade');
            $table->foreign('invite_to_role_id')->references('id')->on('roles')->onDelete('cascade');
            $table->enum('status', ['0', '1'])->default('1');
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
        Schema::dropIfExists('invitatioin_hierarchies');
    }
}
