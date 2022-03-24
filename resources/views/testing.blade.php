@extends('layouts.app')

@section('head')
<title>Sales</title>
@endsection


@section('content')
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
</button>


<div class="modal container-fluid" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header m-1 p-2">

                <h4 class="m-1 p-2">Request an event</h4>
                <p class="m-1 p-2">Can't find the event you're looking for?
                    Enter the details below and you can start listing immediately.
                    Once our support team approves the event, your tickets will become active on our website.
                </p>

                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="form-group m-1 p-3">
                <form >
                    <div class="row">
                        <label for="exampleFormControlInput1">Artist, Home Team, Tournament, Festival or Show*</label>
                        <input type="show" class="" id="exampleFormControlInput1" placeholder="Search">
                    </div>
                    <div class="row">
                        <label for="exampleFormControlSelect1">Event*</label>
                        <input type="event" class="" id="exampleFormControlInput1">
                    </div>
                    <div class="row">
                        <label for="date">Event Date/Time*</label>
                        <input type="date" class="col me-1" id="date" name="date">
                        <select class="col ms-1" id="exampleFormControlSelect1">
                            <option>times</option>
                        </select>
                    </div>
                    <div class="row">
                        <label for="exampleFormControlInput1">Venue*</label>
                        <input type="venue" class=" placeholder="Search">
                    </div>
                    <div class="row">
                        <label for="exampleFormControlInput1">City*</label>
                        <input type="city" class=" ">
                    </div>
                    <div class="row">
                        <label for="exampleFormControlSelect1">Country*</label>
                        <select class="" id="exampleFormControlSelect1">
                            <option selected>Albania</option>
                            <option>Algeria</option>
                            <option>American Samoa</option>
                            <option>Andorra</option>
                            <option>Angola</option>
                        </select>
                    </div>
                    <div class="row">

                        <label for="exampleFormControlInput1">Onsale</label>
                        <input type="date" class="col me-1" id="date" name="date">

                        <select class="col ms-1" id="exampleFormControlSelect1">
                            <option>times</option>
                        </select>
                    </div>
                    <div class="row">
                        <label for="exampleFormControlInput1">Face Value</label>
                        <select class="col me-1" id="exampleFormControlSelect1">
                            <option>Euro</option>
                            <option>Hong Kong Dollar</option>
                            <option>Croatian Kuna</option>
                            <option>Japanese Yen</option>
                            <option>South Korean Won</option>
                        </select>
                        <input type="valmin" class="col mx-1" id="exampleFormControlInput1" placeholder="Face Value Min">
                        <input type="valmax" class="col ms-1" id="exampleFormControlInput1" placeholder="Face Value Max">
                    </div>
                    <div class="row">
                        <label for="exampleFormControlInput1">Event Url and Notes*</label>
                        <input type="venue" class="" id="exampleFormControlInput1">

                    </div>
                </form>
            </div>
            <!-- Modal footer -->
            <div class="modal-footer m-1 p-2">
                <button type="button" class="btn btn-secondary">Secondary</button>
                <button type="button" class="btn btn-success">Success</button>
            </div>

        </div>
    </div>
</div>

@endsection