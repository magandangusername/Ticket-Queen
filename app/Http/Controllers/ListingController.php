<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\queenticketeventinfo;
use App\Models\ConcertListing;
use Exception;
use App\Models\queenticketeventdetails;
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
        //
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
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        //
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

}
