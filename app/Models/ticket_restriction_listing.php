<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ticket_restriction_listing extends Model
{
    use HasFactory;

    protected $fillable = ['Listing_ID', 'Restriction_ID', 'Listing_note_ID'];
}
