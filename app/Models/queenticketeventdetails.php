<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class queenticketeventdetails extends Model
{
    use HasFactory;

    protected $fillable = [
        'ConcertID',
        'Section',
        'Row',
        'Seats',
        'Ticket_Type',
        'Price',
        'Available_Tickets',
        'Expiration',
        'status'


    ];
}
