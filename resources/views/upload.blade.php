@extends('layouts.app')

@section('head')
    <title>Upload</title>
@endsection


@section('content')
    <div class="container mt-3 pt-3 border bg-light">
        <div class="d-flex justify-content-between">
            <div class="h 1 m0 pbxs"><b>{{ $event['event_name'] }}</b>
                <h6 class="h s cGry2">
                    {{ \Carbon\Carbon::parse($event['event_date'] . ' ' . $event['event_time'])->isoFormat('dddd, D MMMM YYYY h:mm a') }}
                </h6>
                <p>
                    {{ $event['event_venue'] . ', ' . $event['event_city'] . ', ' . $event['event_country'] }}
                </p>
            </div>

            <div class="d-flex justify-content-end">

                <p>Listing ID
                    <br>
                    {{ $ticketinfo['listing_id'] }}
                </p>

            </div>
        </div>
        <div class="d-flex">

            <p>{{ $ticketinfo['tickets_available'] }} tickets</p>

            &nbsp;
            &nbsp;

            <div class="mb-2 bg-light text-dark"><b>Section: </b>{{ $ticketinfo['section'] }}</div>
            &nbsp;
            &nbsp;

            <div class=" mb-2 bg-light text-dark"><b>Row: </b>{{ $ticketinfo['row'] }}</div>
            &nbsp;
            &nbsp;

            <div class=" mb-2 bg-light text-dark"><b>Seat: </b>{{ $ticketinfo['seats_from'] . ' - ' . $ticketinfo['seats_to'] }}
            </div>
        </div>
    </div>
    <br>
    <div class="container pt-3 border bg-light">
        <div class="d-flex justify-content-center">
            <div>
                <br>
                <br>
                <br>

                <center>
                    <i class="fa-solid fa-arrow-up-from-bracket fa-4x" style="color:#D3D3D3"></i>
                    <br>
                    <h4><b>Upload Your Tickets Now</b></h4>
                </center>
                <br>

                <div class="justify-content">


                    <i class="fas fa-check" style="color:#F25278"></i>&nbsp Tickets are more likely to sell if ready for
                    'Instant Download'
                    <br>
                    <i class="fas fa-check" style="color:#F25278"></i>&nbsp Keep your tickets listed right up until the
                    event
                    <br>
                    <i class="fas fa-check" style="color:#F25278"></i>&nbsp You can retrieve your tickets at any time
                    <br>
                    <br>
                    <br>

                    <br>
                </div>
                <center class="mb-3">
                    <button type="button" class="btn btn-success">
                        <i class="fa-solid fa-arrow-up-from-bracket"></i>&nbsp Choose File
                    </button>
                </center>
            </div>
        </div>

    </div>
@endsection
