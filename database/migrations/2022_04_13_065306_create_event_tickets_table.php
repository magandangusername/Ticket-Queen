<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\events;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_tickets', function (Blueprint $table) {
            $table->id('listing_id');
            $table->unsignedBigInteger('ticket_type_id')->default(2);
            $table->string('ticket_separation')->nullable();
            $table->integer('tickets_available')->default(0);
            $table->integer('tickets_sold')->default(0);
            $table->string('section')->nullable();
            $table->string('row')->nullable();
            $table->string('seats_from')->nullable();
            $table->string('seats_to')->nullable();
            $table->float('price');
            $table->float('proceeds')->nullable();
            $table->string('currency')->nullable();
            $table->enum('status', ['active', 'inactive'])->default('inactive');
            $table->string('ticket_location')->nullable();
            $table->tinyInteger('is_published')->default(0);
            $table->unsignedBigInteger('event_id');
            $table->timestamp('created_at')->default(\DB::raw('CURRENT_TIMESTAMP'));
            $table->timestamp('updated_at')->default(\DB::raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));



            $table->foreign('event_id')
                ->references('event_id')->on('events')
                ->onDelete('cascade');

            $table->foreign('ticket_type_id')
                ->references('ticket_type_id')->on('ticket_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event_tickets');
    }
};
