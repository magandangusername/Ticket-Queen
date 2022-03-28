<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
class queenticketeventinfo extends Model
{
    use HasFactory;
    protected $table = 'queenticketeventinfo';
   
    //get remaining days in specific event
    public function getRemainingDaysAttribute()
    {
    
        if ($this->ConcertDate) {
           // $remaining_days = Carbon::now()->diffInDays(Carbon::parse($this->ConcertDate));
            $remaining_days = Carbon::parse($this->ConcertDate)->diffInDays(now());
        } else {
            $remaining_days = 0;
        }
        return $remaining_days;
    }
}
