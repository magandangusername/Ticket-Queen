<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\queenticketeventinfo;
use App\Models\ConcertListing;
use Exception;
use App\Models\queenticketeventdetails;
use App\Models\Restrictions;
use App\Models\listing_notes;
use App\Models\ticket_restriction_listing;
use ArrayObject;

class ListingController extends Controller
{
    //

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        // $data=queenticketeventinfo::join('queenticketeventdetails','queenticketeventdetails.ConcertID','=','queenticketeventinfo.ConcertID')
        // ->select('queenticketeventdetails.*','queenticketeventinfo.*')
        // ->get();
        $data = queenticketeventinfo::all();
        $data2 = queenticketeventdetails::all();

        //    return view('listing',['queenticketeventinfo'=>$data]);
        // return view('listing',compact('data'));
        return view('listing', ['data' => $data, 'data2' => $data2]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $validatedData = $request->validate([
            'Listing_ID' => 'required',
            'ConcertID' => 'required',
            'Section' => 'required',
            'Row' => 'nullable',
            'Seats' => 'nullable',
            'Ticket_Type' => 'required',
            'Price' => 'required|numeric',
            'Available_Tickets' => 'required',
            'Expiration' => 'required',
            'status' => 'required'
        ]);

        $ticket = queenticketeventdetails::where('Listing_ID', $validatedData['Listing_ID'])->update([
            'ConcertID' => $validatedData['ConcertID'],
            'Section' => $validatedData['Section'],
            'Row' => $validatedData['Row'],
            'Seats' => $validatedData['Seats'],
            'Ticket_Type' => $validatedData['Ticket_Type'],
            'Price' => $validatedData['Price'],
            'Available_Tickets' => $validatedData['Available_Tickets'],
            'Expiration' => $validatedData['Expiration'],
            'status' => $validatedData['status']
        ]);

        // return $ticket->toJson('Ticket Updated!');
    }

    public function ticketupdate(Request $request)
    {


        $validatedData = $request->validate([
            '0.Listing_ID' => 'required',
            '0.ConcertID' => 'required',
            '0.Section' => 'required',
            '0.Row' => 'nullable',
            '0.Seats' => 'nullable',
            '0.Ticket_Type' => 'required',
            '0.Price' => 'required|numeric',
            '0.Available_Tickets' => 'required',
            '0.Ticket_Sold' => 'required|numeric',
            '0.Expiration' => 'required',
            '0.status' => 'required'
        ]);

        $ticket = queenticketeventdetails::where('Listing_ID', $validatedData[0]['Listing_ID'])->update([
            'ConcertID' => $validatedData[0]['ConcertID'],
            'Section' => $validatedData[0]['Section'],
            'Row' => $validatedData[0]['Row'],
            'Seats' => $validatedData[0]['Seats'],
            'Ticket_Type' => $validatedData[0]['Ticket_Type'],
            'Price' => $validatedData[0]['Price'],
            'Available_Tickets' => $validatedData[0]['Available_Tickets'],
            'Expiration' => $validatedData[0]['Expiration'],
            'status' => $validatedData[0]['status']
        ]);

        $restrictiondel = ticket_restriction_listing::where('Listing_ID', $validatedData[0]['Listing_ID'])->delete();
        // return json_decode(json_encode($request[1]));
        // $request[1]->array_map(function($restrict){
        //     $restrictioncreate = ticket_restriction_listing::create([
        //         "Listing_ID" => $restrict['Listing_ID'],
        //         "Restriction_ID" => $restrict['Restriction_ID'],
        //         "Listing_note_ID" => $restrict['Listing_note_ID']
        //     ]);
        // });

        foreach ($request[1] as $key => $value) {
            // return $value;
            $restrictioncreate = ticket_restriction_listing::create([
                "Listing_ID" => $validatedData[0]['Listing_ID'],
                "Restriction_ID" => $value["Restriction_ID"]
            ]);
        }

        foreach ($request[2] as $key => $value) {
            // return $value;
            $restrictioncreate = ticket_restriction_listing::create([
                "Listing_ID" => $validatedData[0]['Listing_ID'],
                "Listing_note_ID" => $value["Listing_note_ID"]
            ]);
        }


        // $ticket = queenticketeventdetails::where('Listing_ID', '989318363')->update([
        //     'Row' => $request[0]['Row']
        // ]);


    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $validatedData = $request->validate([
            'Listing_ID' => 'required',
            'ConcertID' => 'required',
            'Section' => 'required',
            'Row' => 'nullable',
            'Seats' => 'nullable',
            'Ticket_Type' => 'required',
            'Price' => 'required|numeric',
            'Available_Tickets' => 'required|',
            'Expiration' => 'required',
            'status' => 'required'
        ]);

        $ticket = queenticketeventdetails::where('Listing_ID', $validatedData['Listing_ID'])->delete();
        ticket_restriction_listing::where('Listing_ID', $validatedData['Listing_ID'])->delete();
    }

    public function deletedSelected(Request $request)
    {
        $validatedData = $request->validate([
            '0.Listing_ID' => 'required',
            '0.ConcertID' => 'required',
            '0.Section' => 'required',
            '0.Row' => 'nullable',
            '0.Seats' => 'nullable',
            '0.Ticket_Type' => 'required',
            '0.Price' => 'required|numeric',
            '0.Available_Tickets' => 'required',
            '0.Ticket_Sold' => 'required|numeric',
            '0.Expiration' => 'required',
            '0.status' => 'required'
        ]);

        foreach ($request->all() as $key => $value) {
            queenticketeventdetails::where('Listing_ID', $value['Listing_ID'])->delete();
            ticket_restriction_listing::where('Listing_ID', $value['Listing_ID'])->delete();
        }
    }

    public function deleteTicket(Request $request)
    {
        try {
            $ids = array_column($request->id, "id");
            ConcertListing::whereIn('id', $ids)->delete();
            return response()->json('Enquiry deleted');
        } catch (Exception $e) {
            return response()->json($e->getMessage(), 500);
        }
    }
    public function search(Request $request)
    {
        $search = $request->get('search');
        $data = queenticketeventinfo::where('ConcertName', 'LIKE', '%' . $search . '%')->paginate(5);
        $data2 = queenticketeventdetails::all();
        return view('listing', ['data' => $data, 'data2' => $data2]);
    }


    public function concerts()
    {
        $concert_listing = queenticketeventinfo::all();

        return $concert_listing->toJson();
    }

    public function tickets()
    {
        $ticket_listing = queenticketeventdetails::all();

        return $ticket_listing->toJson();
    }

    public function restrictions()
    {
        $restrictions = restrictions::all();

        return $restrictions->toJson();
    }

    public function listing_notes()
    {
        $listing_notes = listing_notes::all();

        return $listing_notes->toJson();
    }

    public function restrictions_fetch($id)
    {
        $restrictions = restrictions::leftjoin('ticket_restriction_listings', 'restrictions.Restriction_ID', '=', 'ticket_restriction_listings.Restriction_ID')
            ->where('ticket_restriction_listings.Listing_ID', '=', $id)->get();

        return $restrictions->toJson();
    }

    public function listing_notes_fetch($id)
    {
        $listing_notes = listing_notes::leftjoin('ticket_restriction_listings', 'listing_notes.Listing_note_ID', '=', 'ticket_restriction_listings.Listing_note_ID')
            ->where('ticket_restriction_listings.Listing_ID', '=', $id)->get();

        return $listing_notes->toJson();
    }

    public function clone(Request $request)
    {
        $validatedData = $request->validate([
            '0.0.Listing_ID' => 'required',
            '0.0.ConcertID' => 'required',
            '0.0.Section' => 'required',
            '0.0.Row' => 'nullable',
            '0.0.Seats' => 'nullable',
            '0.0.Ticket_Type' => 'required',
            '0.0.Price' => 'required|numeric',
            '0.0.Available_Tickets' => 'required',
            '0.0.Ticket_Sold' => 'required|numeric',
            '0.0.Expiration' => 'required',
            '0.0.status' => 'required'
        ]);

        foreach ($request[0] as $key => $value) {

            $ticket = queenticketeventdetails::create([
                'ConcertID' => $value['ConcertID'],
                'Section' => $value['Section'],
                'Row' => $value['Row'],
                'Seats' => $value['Seats'],
                'Ticket_Type' => $value['Ticket_Type'],
                'Price' => $value['Price'],
                'Available_Tickets' => $value['Available_Tickets'],
                'Expiration' => $value['Expiration'],
                'status' => $value['status']
            ]);

            $listingid = queenticketeventdetails::latest('created_at')->first();

            foreach ($request[1] as $key => $value) {
                $restrictioncreate = ticket_restriction_listing::create([
                    "Listing_ID" => $listingid->Listing_ID,
                    "Restriction_ID" => $value["Restriction_ID"]
                ]);
            }

            foreach ($request[2] as $key => $value) {
                // return $value;
                $restrictioncreate = ticket_restriction_listing::create([
                    "Listing_ID" => $listingid->Listing_ID,
                    "Listing_note_ID" => $value["Listing_note_ID"]
                ]);
            }
        }
    }

    public function publishselect(Request $request)
    {
        $validatedData = $request->validate([
            '0.Listing_ID' => 'required',
            '0.ConcertID' => 'required',
            '0.Section' => 'required',
            '0.Row' => 'nullable',
            '0.Seats' => 'nullable',
            '0.Ticket_Type' => 'required',
            '0.Price' => 'required|numeric',
            '0.Available_Tickets' => 'required',
            '0.Ticket_Sold' => 'required|numeric',
            '0.Expiration' => 'required',
            '0.status' => 'required'
        ]);

        foreach ($request->all() as $key => $value) {
            queenticketeventdetails::where('Listing_ID', $value['Listing_ID'])->update([
                'status' => 'active'
            ]);
        }
    }

    public function unpublishselect(Request $request)
    {
        $validatedData = $request->validate([
            '0.Listing_ID' => 'required',
            '0.ConcertID' => 'required',
            '0.Section' => 'required',
            '0.Row' => 'nullable',
            '0.Seats' => 'nullable',
            '0.Ticket_Type' => 'required',
            '0.Price' => 'required|numeric',
            '0.Available_Tickets' => 'required',
            '0.Ticket_Sold' => 'required|numeric',
            '0.Expiration' => 'required',
            '0.status' => 'required'
        ]);

        foreach ($request->all() as $key => $value) {
            queenticketeventdetails::where('Listing_ID', $value['Listing_ID'])->update([
                'status' => 'disabled'
            ]);
        }
    }

    public function topaperselect(Request $request)
    {
        $validatedData = $request->validate([
            '0.Listing_ID' => 'required',
            '0.ConcertID' => 'required',
            '0.Section' => 'required',
            '0.Row' => 'nullable',
            '0.Seats' => 'nullable',
            '0.Ticket_Type' => 'required',
            '0.Price' => 'required|numeric',
            '0.Available_Tickets' => 'required',
            '0.Ticket_Sold' => 'required|numeric',
            '0.Expiration' => 'required',
            '0.status' => 'required'
        ]);

        foreach ($request->all() as $key => $value) {
            queenticketeventdetails::where('Listing_ID', $value['Listing_ID'])->update([
                'Ticket_Type' => 'Paper Ticket'
            ]);
        }
    }

    public function toeselect(Request $request)
    {
        $validatedData = $request->validate([
            '0.Listing_ID' => 'required',
            '0.ConcertID' => 'required',
            '0.Section' => 'required',
            '0.Row' => 'nullable',
            '0.Seats' => 'nullable',
            '0.Ticket_Type' => 'required',
            '0.Price' => 'required|numeric',
            '0.Available_Tickets' => 'required',
            '0.Ticket_Sold' => 'required|numeric',
            '0.Expiration' => 'required',
            '0.status' => 'required'
        ]);

        foreach ($request->all() as $key => $value) {
            queenticketeventdetails::where('Listing_ID', $value['Listing_ID'])->update([
                'Ticket_Type' => 'E-Ticket'
            ]);
        }
    }

    public function createconcert(Request $request)
    {
        $validatedData = $request->validate([
            'ConcertName' => 'required',
            'Location' => 'required'
        ]);

        queenticketeventinfo::create([
            'ConcertName' => $validatedData['ConcertName'],
            'Location' => $validatedData['Location']
        ]);
    }
}
