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
        Schema::create('Queenticketeventinfo', function (Blueprint $table) {
            $table->id();
            $table->string('ConcertName')->nullable();
            $table->datetime('ConcertDate')->nullable();
            $table->string('Location')->nullable();
            $table->integer('Available_Ticket')->nullable();
            $table->integer('Ticket_Sold')->nullable();
            $table->integer('Pending_Fulfillment')->nullable();
            $table->date('StartBuyDate')->nullable();
            $table->date('EndBuyDate')->nullable();
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
        Schema::dropIfExists('Queenticketeventinfo');
    }
};
