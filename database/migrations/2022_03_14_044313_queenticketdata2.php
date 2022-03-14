<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Queenticketeventdetails', function (Blueprint $table) {
            $table->id('Listing ID');
            $table->string('Section')->nullable();;
            $table->string('Row')->nullable();;
            $table->string('Seats')->nullable();;
            $table->string('Ticket Type')->nullable();;
            $table->float('Price')->nullable();;
            $table->integer('Available Tickets')->nullable();
            $table->integer('Ticket Sold')->nullable();
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
        //
    }
};
