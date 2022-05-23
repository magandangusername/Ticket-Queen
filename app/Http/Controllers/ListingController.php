<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\events;
use App\Models\EventTickets;
use App\Models\Restrictions;
use App\Models\listing_notes;
use App\Models\TicketRestrictionListingnote;
use App\Models\TicketTypes;
use Illuminate\Support\Carbon;

class ListingController extends Controller
{


    public function show()
    {
        $data = events::all();
        $data2 = EventTickets::all();

        return view('listing', ['data' => $data, 'data2' => $data2]);
    }

    // for creation of ticket
    public function createticket(Request $request)
    {
        $validatedData = $request->validate([
            '0.event_id' => 'required',
            '0.section' => 'required',
            '0.row' => 'nullable',
            '0.seats_from' => 'nullable',
            '0.seats_to' => 'nullable',
            '0.ticket_type_id' => 'required',
            '0.price' => 'required|numeric',
            '0.tickets_available' => 'required',
            '0.tickets_sold' => 'required|numeric',
            '0.ticket_separation' => 'required',
            '0.currency' => 'required',
            '0.is_published' => 'required'
        ]);



        $ticket = EventTickets::create([
            'ticket_type_id' => $validatedData[0]['ticket_type_id'],
            'ticket_separation' => $validatedData[0]['ticket_separation'],
            'tickets_available' => $validatedData[0]['tickets_available'],
            'section' => $validatedData[0]['section'],
            'row' => $validatedData[0]['row'],
            'seats_from' => $validatedData[0]['seats_from'],
            'seats_to' => $validatedData[0]['seats_to'],
            'price' => $validatedData[0]['price'],
            'currency' => $validatedData[0]['currency'],
            // 'status' => $validatedData[0]['status'],
            'is_published' => $validatedData[0]['is_published'],
            'event_id' => $validatedData[0]['event_id']
        ]);

        $listingid = EventTickets::latest('created_at')->first();

        foreach ($request[1] as $key => $value) {
            $restrictionlistnotecreate = TicketRestrictionListingnote::create([
                "listing_id" => $listingid->listing_id,
                "restriction_id" => $value["restriction_id"]
            ]);
        }

        foreach ($request[2] as $key => $value) {
            // return $value;
            $restrictionlistnotecreate = TicketRestrictionListingnote::create([
                "listing_id" => $listingid->listing_id,
                "listing_note_id" => $value["listing_note_id"]
            ]);
        }


    }

    // for updating the ticket price, available tickets, and publish data
    public function update(Request $request)
    {
        $validatedData = $request->validate([
            'listing_id' => 'required|numeric',
            'ticket_type_id' => 'required|numeric',
            'ticket_separation' => 'nullable',
            'tickets_available' => 'required',
            'section' => 'nullable',
            'row' => 'nullable',
            'seats_from' => 'nullable',
            'seats_to' => 'nullable',
            'price' => 'required|numeric',
            'currency' => 'nullable',
            'status' => 'nullable',
            'is_published' => 'required|numeric',
            'event_id' => 'required'
        ]);

        $ticket = EventTickets::where('listing_id', $validatedData['listing_id'])->update([
            'tickets_available' => $validatedData['tickets_available'],
            'price' => $validatedData['price'],
            'is_published' => $validatedData['is_published']
        ]);

    }

    // updates the ticket data from the ticket editting form
    public function ticketupdate(Request $request)
    {
        $validatedData = $request->validate([
            '0.listing_id' => 'required|numeric',
            '0.ticket_type_id' => 'required|numeric',
            '0.ticket_separation' => 'nullable',
            '0.tickets_available' => 'required',
            '0.section' => 'nullable',
            '0.row' => 'nullable',
            '0.seats_from' => 'nullable',
            '0.seats_to' => 'nullable',
            '0.price' => 'required|numeric',
            '0.currency' => 'nullable',
            '0.status' => 'nullable',
            '0.is_published' => 'required|numeric',
            '0.event_id' => 'required'
        ]);

        $ticket = EventTickets::where('listing_id', $validatedData[0]['listing_id'])->update([
            'ticket_separation' => $validatedData[0]['ticket_separation'],
            'tickets_available' => $validatedData[0]['tickets_available'],
            'section' => $validatedData[0]['section'],
            'row' => $validatedData[0]['row'],
            'seats_from' => $validatedData[0]['seats_from'],
            'seats_to' => $validatedData[0]['seats_from'],
            'price' => $validatedData[0]['price'],
            'currency' => $validatedData[0]['currency'],
            'is_published' => $validatedData[0]['is_published']
        ]);

        TicketRestrictionListingnote::where('listing_id', $validatedData[0]['listing_id'])->delete();


        foreach ($request[1] as $key => $value) {
            TicketRestrictionListingnote::create([
                "listing_id" => $validatedData[0]['listing_id'],
                "restriction_id" => $value["restriction_id"]
            ]);
        }

        foreach ($request[2] as $key => $value) {
            TicketRestrictionListingnote::create([
                "listing_id" => $validatedData[0]['listing_id'],
                "listing_note_id" => $value["listing_note_id"]
            ]);
        }
    }

    // for deleting the ticket
    public function destroy(Request $request)
    {
        $validatedData = $request->validate([
            'listing_id' => 'required',
            'event_id' => 'required',
            'section' => 'required',
            'row' => 'nullable',
            'seats_from' => 'nullable',
            'ticket_type_id' => 'required',
            'price' => 'required|numeric',
            'tickets_available' => 'required|',
            'is_published' => 'required'
        ]);

        $ticket = EventTickets::where('listing_id', $validatedData['listing_id'])->delete();

    }

    // for deleting the selected tickets
    public function deletedSelected(Request $request)
    {
        $validatedData = $request->validate([
            '0.listing_id' => 'required',
            '0.event_id' => 'required',
            '0.section' => 'required',
            '0.row' => 'nullable',
            '0.seats_from' => 'nullable',
            '0.ticket_type_id' => 'required',
            '0.price' => 'required|numeric',
            '0.tickets_available' => 'required',
            '0.tickets_sold' => 'required|numeric',
            '0.is_published' => 'required'
        ]);

        foreach ($request->all() as $key => $value) {
            $ticket = EventTickets::where('listing_id', $value['listing_id'])->delete();
        }

    }


    public function search(Request $request)
    {
        $search = $request->get('search');
        $data = events::where('ConcertName', 'LIKE', '%' . $search . '%')->paginate(5);
        $data2 = EventTickets::all();
        return view('listing', ['data' => $data, 'data2' => $data2]);
    }

    // api: returning the events/concerts in a json format
    public function concerts()
    {
        $concert_listing = events::where('event_date','>=',Carbon::createFromFormat('Y-m-d',date('Y-m-d'),'Asia/Manila')->toDateTimeString())->get();

        return $concert_listing->toJson();
    }

    // api: returning the tickets in a json format
    public function tickets()
    {
        $ticket_listing = EventTickets::leftjoin('events','event_tickets.event_id','=','events.event_id')->where('events.event_date','>=',Carbon::createFromFormat('Y-m-d',date('Y-m-d'),'Asia/Manila'))->get();

        return $ticket_listing->toJson();
    }

    // api: returning the restrictions in a json format
    public function restrictions()
    {
        $restrictions = restrictions::all();

        return $restrictions->toJson();
    }

    // api: returning the listing notes in a json format
    public function listing_notes()
    {
        $listing_notes = listing_notes::all();

        return $listing_notes->toJson();
    }

    // api: returning the ticket types in a json format
    public function ticket_types()
    {
        $ticket_types = TicketTypes::all();

        return $ticket_types->toJson();
    }


    // api: returning the restriction(s) of a specific ticket in a json format
    public function restrictions_fetch($id)
    {
        $restrictions = restrictions::leftjoin('ticket_restriction_listingnotes', 'restrictions.restriction_id', '=', 'ticket_restriction_listingnotes.restriction_id')
            ->where('ticket_restriction_listingnotes.listing_id', '=', $id)->get();

        return $restrictions->toJson();
    }

    // api: returning the listing note(s) of a specific ticket in a json format
    public function listing_notes_fetch($id)
    {
        $listing_notes = listing_notes::leftjoin('ticket_restriction_listingnotes', 'listing_notes.listing_note_id', '=', 'ticket_restriction_listingnotes.listing_note_id')
            ->where('ticket_restriction_listingnotes.listing_id', '=', $id)->get();

        return $listing_notes->toJson();
    }

    // for cloning the ticket
    public function clone(Request $request)
    {
        $validatedData = $request->validate([
            '0.0.listing_id' => 'required',
            '0.0.event_id' => 'required',
            '0.0.section' => 'required',
            '0.0.row' => 'nullable',
            '0.0.seats_from' => 'nullable',
            '0.0.ticket_type_id' => 'required',
            '0.0.price' => 'required|numeric',
            '0.0.tickets_available' => 'required',
            '0.0.tickets_sold' => 'required|numeric',
            '0.0.is_published' => 'required'
        ]);

        foreach ($request[0] as $key => $value) {

            $ticket = EventTickets::create([
                'ticket_type_id' => $value['ticket_type_id'],
                'ticket_separation' => $value['ticket_separation'],
                'tickets_available' => $value['tickets_available'],
                'section' => $value['section'],
                'row' => $value['row'],
                'seats_from' => $value['seats_from'],
                'seats_to' => $value['seats_from'],
                'price' => $value['price'],
                'currency' => $value['currency'],
                'status' => $value['status'],
                'is_published' => $value['is_published'],
                'event_id' => $value['event_id']
            ]);

            $listingid = EventTickets::latest('created_at')->first();

            foreach ($request[1] as $key => $value) {
                $restrictionlistnotecreate = TicketRestrictionListingnote::create([
                    "listing_id" => $listingid->listing_id,
                    "restriction_id" => $value["restriction_id"]
                ]);
            }

            foreach ($request[2] as $key => $value) {
                // return $value;
                $restrictionlistnotecreate = TicketRestrictionListingnote::create([
                    "listing_id" => $listingid->listing_id,
                    "listing_note_id" => $value["listing_note_id"]
                ]);
            }
        }

    }

    // for setting the selected tickets to published
    public function publishselect(Request $request)
    {
        $validatedData = $request->validate([
            '0.listing_id' => 'required|numeric',
            '0.ticket_type_id' => 'required|numeric',
            '0.ticket_separation' => 'nullable',
            '0.tickets_available' => 'required',
            '0.section' => 'nullable',
            '0.row' => 'nullable',
            '0.seats_from' => 'nullable',
            '0.seats_to' => 'nullable',
            '0.price' => 'required|numeric',
            '0.currency' => 'nullable',
            '0.status' => 'nullable',
            '0.is_published' => 'required|numeric',
            '0.event_id' => 'required'
        ]);

        foreach ($request->all() as $key => $value) {
            EventTickets::where('listing_id', $value['listing_id'])->update([
                'is_published' => 1
            ]);
        }
    }

    // for setting the selected tickets to unpublished
    public function unpublishselect(Request $request)
    {
        $validatedData = $request->validate([
            '0.listing_id' => 'required|numeric',
            '0.ticket_type_id' => 'required|numeric',
            '0.ticket_separation' => 'nullable',
            '0.tickets_available' => 'required',
            '0.section' => 'nullable',
            '0.row' => 'nullable',
            '0.seats_from' => 'nullable',
            '0.seats_to' => 'nullable',
            '0.price' => 'required|numeric',
            '0.currency' => 'nullable',
            '0.status' => 'nullable',
            '0.is_published' => 'required|numeric',
            '0.event_id' => 'required'
        ]);

        foreach ($request->all() as $key => $value) {
            EventTickets::where('listing_id', $value['listing_id'])->update([
                'is_published' => 0
            ]);
        }
    }

    // for changing the tickets to paper tickets
    public function topaperselect(Request $request)
    {
        $validatedData = $request->validate([
            '0.listing_id' => 'required|numeric',
            '0.ticket_type_id' => 'required|numeric'

        ]);

        foreach ($request->all() as $key => $value) {
            EventTickets::where('listing_id', $value['listing_id'])->update([
                'ticket_type_id' => 1
            ]);
        }
    }

    // for changing the tickets to e tickets
    public function toeselect(Request $request)
    {
        $validatedData = $request->validate([
            '0.listing_id' => 'required|numeric',
            '0.ticket_type_id' => 'required|numeric'

        ]);

        foreach ($request->all() as $key => $value) {
            EventTickets::where('listing_id', $value['listing_id'])->update([
                'ticket_type_id' => 2
            ]);
        }
    }

    // for creating tickets
    public function createconcert(Request $request)
    {
        $validatedData = $request->validate([
            'event_name' => 'required',
            'event_date' => 'required',
            'event_time' => 'required',
            'event_venue' => 'required',
            'event_city' => 'required',
            'event_country' => 'required',
            'event_onsale_date_time' => 'required',
            'event_face_value_currency' => 'required',
            'event_face_value_min' => 'required',
            'event_face_value_max' => 'required',
            'event_url_notes' => 'nullable'
        ]);

        events::create([
            'event_name' => $validatedData['event_name'],
            'event_date' => $validatedData['event_date'],
            'event_time' => $validatedData['event_time'],
            'event_venue' => $validatedData['event_venue'],
            'event_city' => $validatedData['event_city'],
            'event_country' => $validatedData['event_country'],
            'event_onsale_date_time' => $validatedData['event_onsale_date_time'],
            'event_face_value_currency' => $validatedData['event_face_value_currency'],
            'event_face_value_min' => $validatedData['event_face_value_min'],
            'event_face_value_max' => $validatedData['event_face_value_max'],
            'event_url_notes' => $validatedData['event_url_notes']
        ]);
    }
}
