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
        Schema::create('events', function (Blueprint $table) {
            $table->id('event_id');
            $table->string('event_name');
            $table->date('event_date');
            $table->time('event_time');
            $table->string('event_venue')->nullable();
            $table->string('event_city')->nullable();
            $table->string('event_country')->nullable();
            $table->dateTime('event_onsale_date_time')->default(\DB::raw('CURRENT_TIMESTAMP'));
            $table->string('event_face_value_currency');
            $table->float('event_face_value_min')->default(0);
            $table->float('event_face_value_max')->default(1);
            $table->string('event_url_notes')->nullable();
            $table->enum('event_status', ['active', 'inactive'])->default('inactive');
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
        Schema::dropIfExists('events');
    }
};
