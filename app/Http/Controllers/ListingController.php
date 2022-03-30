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
        $data=queenticketeventinfo::all();
        $data2=queenticketeventdetails::all();

    //    return view('listing',['queenticketeventinfo'=>$data]);
       // return view('listing',compact('data'));
       return \view('listing',['data'=> $data,'data2' => $data2]);
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
            'Available_Tickets' => 'required|',
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
    }

    public function deleteTicket(Request $request)
    {
        try
    {
        $ids = array_column($request->id, "id");
        ConcertListing::whereIn('id', $ids)->delete();
        return response()->json('Enquiry deleted');
    }

    catch (Exception $e) {
        return response()->json($e->getMessage(), 500);
    }
    }
    public function search(Request $request)
    {
        $search=$request->get('search');
        $data= queenticketeventinfo::where('ConcertName','LIKE','%'.$search.'%')->paginate(5);
        $data2=queenticketeventdetails::all();
        return view('listing',['data'=> $data,'data2' => $data2]);
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
}
