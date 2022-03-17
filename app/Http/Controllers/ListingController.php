<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\queenticketeventinfo;
use App\Models\queenticketeventdetails;
class ListingController extends Controller
{
    //
    public function show()
    {
        
        $data=queenticketeventinfo::join('queenticketeventdetails','queenticketeventdetails.ConcertID','=','queenticketeventinfo.ConcertID')
       ->select('queenticketeventdetails.*','queenticketeventinfo.*')
       ->get();
      // $data2=queenticketeventdetails::all();

    //    return view('listing',['queenticketeventinfo'=>$data]);
        return view('listing',compact('data'));
       // return \view('listing',['menu'=> $menu,'submenu' => $submenu]);
    }
   
}
