<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AxiosReceiverController extends Controller
{
    public function ReceiveIt(Request $request){
        $validatedData = $request->validate([
            'firstname' => 'nullable',
            'lastname' => 'nullable',
            'email' => 'nullable',
            'phone' => 'nullable',
            'NatID' => 'nullable',
            'password' => 'nullable',
            'userLevel' => 'nullable'
        ]);

        return json_encode($validatedData);
    }
}
