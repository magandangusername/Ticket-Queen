<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class events extends Model
{
    use HasFactory;

    protected $fillable = [
        'event_name',
        'event_date',
        'event_time',
        'event_venue',
        'event_city',
        'event_country',
        'event_onsale_date_time',
        'event_face_value_currency',
        'event_face_value_min',
        'event_face_value_max',
        'event_url_notes',
        'event_status'
    ];
    // protected $table = 'queenticketeventinfo';



    //get remaining days in specific event (does this even works?)
    // public function getRemainingDaysAttribute()
    // {

    //     if ($this->ConcertDate) {
    //        // $remaining_days = Carbon::now()->diffInDays(Carbon::parse($this->ConcertDate));
    //         $remaining_days = Carbon::parse($this->ConcertDate)->diffInDays(now());
    //     } else {
    //         $remaining_days = 0;
    //     }
    //     return $remaining_days;
    // }
}
