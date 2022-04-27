@extends('layouts.app')

@section('head')
<title>Upload</title>
@endsection


@section('content')

<div class="container mt-3 pt-3 border bg-light">
    <div class="d-flex justify-content-between">
        <div class="h 1 m0 pbxs"><b>Christina Aguilera</b>
            <h6 class="h s cGry2">Friday, 05 August 2022 18:30</h6>
            <p>
                The O2, London, United Kingdom
            </p>
        </div>

        <div class="d-flex justify-content-end">

            <p>Listing ID
                <br>
                5030903763
            </p>

        </div>
    </div>
    <div class="d-flex">

        <p>6 tickets</p>

        &nbsp;
        &nbsp;

        <div class="mb-2 bg-light text-dark"><b>Section: </b>406</div>
        &nbsp;
        &nbsp;

        <div class=" mb-2 bg-light text-dark"><b>Row: </b>U</div>
        &nbsp;
        &nbsp;

        <div class=" mb-2 bg-light text-dark"><b>Seat: </b>581-586</div>
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
                <i class="fas fa-check" style="color:#F25278"></i>&nbsp Keep your tickets listed right up until the event
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