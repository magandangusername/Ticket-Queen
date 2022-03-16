<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\queenticketeventinfo;
class ListingController extends Controller
{
    //
    public function show()
    {
        $data=queenticketeventinfo::all();
        
        return view('listing',['queenticketeventinfo'=>$data]);
        
    }
   
}
