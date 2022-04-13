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
        Schema::create('ticket_restriction_listingnotes', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('listing_id');
            $table->unsignedBigInteger('restriction_id');
            $table->unsignedBigInteger('listing_note_id');
            $table->timestamp('created_at')->default(\DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(\DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));

            $table->foreign('listing_id')
                ->references('listing_id')->on('event_tickets')
                ->onDelete('cascade');

            $table->foreign('restriction_id')
                ->references('restriction_id')->on('restrictions');

            $table->foreign('listing_note_id')
                ->references('listing_note_id')->on('listing_notes');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ticket_restriction_listingnotes');
    }
};
