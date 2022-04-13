<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TicketRestrictionListingnote extends Model
{
    use HasFactory;
    protected $fillable = ['listing_id', 'restriction_id', 'listing_note_id'];
}
