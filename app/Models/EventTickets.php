<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EventTickets extends Model
{
    use HasFactory;
    protected $fillable = [
        'ticket_type_id',

        'ticket_separation',

        'tickets_available',
        'section',
        'row',
        'seats_from',
        'seats_to',
        'price',
        'currency',
        'status',
        'ticket_location',
        'is_published',
        'event_id'
    ];
}
