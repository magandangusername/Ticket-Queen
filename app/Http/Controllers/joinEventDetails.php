<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ConcertListing;
class joinEventDetails extends Controller
{
    //
    function show()
    {
        $data2= ConcertListing::join('queenticketeventinfo','queenticketeventinfo.ConcertID','=','concert_listings.ConcertID')
        ->join('queenticketeventdetails','queenticketeventdetails.Listing_ID','=','concert_listings.Listing_ID')
        ->get(['queenticketeventdetails.Listing_ID','queenticketeventdetails.Section','queenticketeventdetails.Row'
        ,'queenticketeventdetails.Seats','queenticketeventdetails.Ticket_Type','queenticketeventdetails.Price'
        ,'queenticketeventinfo.Available_Ticket','queenticketeventinfo.Ticket_Sold','queenticketeventinfo.ConcertID']);

        return view('eventdetails',compact('data2'));
    }
}
