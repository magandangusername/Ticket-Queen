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
            $table->id('Listing_ID');
            $table->integer('ConcertID')->default(0);
            $table->string('Section')->nullable();
            $table->string('Row')->nullable();
            $table->string('Seats')->nullable();
            $table->string('toSeat')->nullable();
            $table->string('Ticket_Type')->nullable();
            $table->float('Price')->nullable();
            $table->integer('Available_Tickets')->default(0);
            $table->integer('Ticket_Sold')->default(0);
            $table->date('Expiration')->nullable();
            $table->enum('status', ['active', 'disabled','fully sold']);  
            $table->enum('publish', ['Yes', 'No']);  
            $table->timestamp('created_at')->default(\DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(\DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('Queenticketeventdetails');
    }
};
