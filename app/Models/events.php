<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class events extends Model
{
    use HasFactory;
    protected $table = 'queenticketeventinfo';



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
