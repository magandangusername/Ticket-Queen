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
        //
        Schema::create('VenueInfo', function (Blueprint $table) {
            $table->id('VenueID');
            $table->string('ShowName')->nullable();
            $table->string('EventName')->nullable();
            $table->date('EventDate')->nullable();
            $table->timestamp('Time')->nullable();
            $table->string('VenueName')->nullable();
            $table->string('City')->nullable();
            $table->date('Onsale')->nullable();
            $table->float('Price')->default(0.00);
            $table->string('Notes')->nullable();
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
        //
    }
};
