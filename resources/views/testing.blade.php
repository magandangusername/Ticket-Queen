@extends('layouts.app')

@section('head')
<title>Sales</title>
@endsection


@section('content')
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#persexpress">
    Open modal
</button>

<div class="container">
    <div class="list-group">
        <a href="#" class="list-group-item list-group-item-action ">
            <i class="fa-solid fa-house-chimney"></i>
            Dashboard
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-tag"></i>
            Listings
        </a>
        <a href="#" class="list-group-item list-group-item-action ">
            <i class="fa-solid fa-money-bill-1-wave"></i>
            Sales
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-clock"></i>
            Last Minute Sales
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa-solid fa-location-dot"></i>
            Reports
        </a>
        <a href="#" class="list-group-item list-group-item-action ">
            <i class="fa-solid fa-gear"></i>
            Settings
        </a>
        <a href="#" class="list-group-item list-group-item-action ">
            <i class="fa-solid fa-envelope"></i>
            Messages
        </a>
    </div>
</div>

{--<div class="modal fade container-fluid" id="myModal">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header m-1 p-2">

                <h4 class="modal-title m-2">Modal Heading</h4>
                <p>
                    <b>Tuesday, 22 March 2022</b>
                    <br>
                    O2 Eventim Apollo, London, United Kingdom
                </p>

                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="form-group modal-body m-1 p-3">
                <div class="dropdowns row">
                    <label for="">Listings</label>
                    <p class="col">Sales</p>
                    <p class="col">Filter By: </p>
                    <div class="form-group col">
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>All Sections</option>
                            <option>6</option>
                        </select>
                    </div>
                    <div class="form-group col">
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>All Venue Areas</option>
                        </select>
                    </div>
                    <div class="form-group col">
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>All Quantities</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                            <option>8</option>
                        </select>
                    </div>
                </div>
                <table class="table mt-5 me-5">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">SECTION</th>
                            <th scope="col">ROW</th>
                            <th scope="col">QUANTITY</th>
                            <th scope="col">PRICE</th>
                            <th scope="col">PROCEEDS</th>
                            <th scope="col">VENUE AREA</th>
                            <th scope="col">LISTING NOTES</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td>403</td>
                            <td>57</td>
                            <td>2</td>
                            <td>A$34.72</td>
                            <td></td>
                            <td>Upper Tier</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <!-- Modal footer -->
            <div class="modal-footer m-1 p-2">
                <button type="button" class="btn btn-secondary">Secondary</button>
                <button type="button" class="btn btn-success">Success</button>
            </div>

        </div>
    </div>
</div> --}


<div class="modal fade container-fluid" id="tiktypes">
    <div class="modal-dialog modal-sm">
        <div class="modal-content text-center">
            <!-- Modal Header -->
            <div class="modal-header p-2" style="background: #424549; color: #edf6ff">

                <b>
                    <h4 class="modal-title">Select Ticket Type</h4>
                </b>

                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="form-group modal-body m-1 p-3">
                <button type="button" class="btn btn-light p-2">Name of Ticket Type</button>
            </div>
            <!-- Modal footer -->
            <div class="modal-footer m-1 p-2 justify-content-between">
                <button type="button" class="btn btn-secondary " data-bs-dismiss="modal" style="float: left;">
                    < Back </button>
            </div>

        </div>
    </div>
</div>

<div class="modal fade container-fluid" id="express">
    <div class="modal-dialog modal-auto">
        <div class="modal-content text-center">
            <!-- Modal Header -->
            <div class="modal-header p-2" style="background: #424549; color: #edf6ff">

                <b>
                    <h4 class="modal-title">Express Local Shipping</h4>
                </b>

                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="form-group modal-body m-1 p-3">
                <div class="p-2 m-2">
                    <div class="row border text-left p-2">

                        A Ticket Location will only appear here if it is in the postcode range of an Express Local Shipping delivery
                        plan.
                        Remember that only tickets for events in the same city as your Ticket Location will be available for Express
                        Local Shipping.

                    </div>


                    <div class="border row p-2">
                        <div class="col text-left">
                            Queen Trading
                            <br>
                            214 st kilda road, st kilda, Melbourne
                            <br>
                            Melbourne, Victoria, 3189
                            <br>
                            Australia
                        </div>
                        <div class="col ">
                            <div class="form-check form-switch ">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                <label class="form-check-label" for="flexSwitchCheckDefault">Opt-in</label>
                            </div>
                        </div>
                    </div>


                    <div class="border row p-2">
                        <div class="col text-left">
                            Nicolas Finthal
                            <br>
                            199 roscoe
                            <br>
                            Bondi beach, New South Wales, 2026
                            <br>
                            Australia
                        </div>

                        <div class="col ">
                            <div class="form-check form-switch ">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                <label class="form-check-label" for="flexSwitchCheckDefault">Opt-in</label>
                            </div>
                        </div>
                    </div>

                    <div class="border row p-2">
                        <div class="col text-left">
                            Matuidi Nicolas
                            <br>
                            15/78 Curlewis St
                            <br>
                            Bondi Beach, New South Wales, 2026
                            <br>
                            Australia
                        </div>

                        <div class="col ">
                            <div class="form-check form-switch ">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                <label class="form-check-label" for="flexSwitchCheckDefault">Opt-in</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal footer -->
            <div class="modal-footer m-1 p-2">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    < Back</button>
            </div>

        </div>
    </div>
</div>

<div class="modal fade container-fluid" id="clone">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <!-- Modal Header -->
            <div class="modal-header p-2" style="background: #424549; color: #edf6ff">

                <b>
                    <h4 class="modal-title">Clone Listing</h4>
                </b>

                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="form-group modal-body m-1 p-3">
                <p>
                    <i class="fa-solid fa-circle-info"></i>
                    By cloning this listing you are confirming that all information provided about the listings you want to create,
                    except the fields you explicitly change, are the same.
                </p>
                <h4>Stereophonics</h4>
                <p>
                    <b>Friday, 01 April 2022</b>
                    <br>
                    The O2, London, United Kingdom
                </p>
                <table class="container form bg-light text-dark border">
                    <div>
                        <tr>
                            <th>Section</th>
                            <th>Row</th>
                            <th>Seat From</th>
                            <th>Seat To</th>
                            <th>Website Price</th>
                            <th>Proceeds</th>
                            <th>Available Ticket</th>
                            <th></th>
                        </tr>
                        <tr class="p-2">
                            <td>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <i class="fa-regular fa-chevron-down"></i>
                                    <option selected>Choose one</option>
                                    <option>Lounge</option>
                                    <option>417</option>
                                    <option>Lower Tier</option>
                                    <option>Upper Tier</option>
                                </select>
                            </td>
                            <td>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>A</option>
                                    <option>B</option>
                                    <option selected>P</option>
                                    <option>C</option>
                                    <option>D</option>
                                    <i class="fa-regular fa-chevron-down"></i>
                                </select>
                    </div>
                    </td>
                    <td>
                        <input type="seatfrom" class="form-control" id="exampleFormControlInput1">
                    </td>
                    <td>
                        <input type="seatto" class="form-control" id="exampleFormControlInput1">
                    </td>
                    <td>
                        <input type="webprice" class="form-control" id="exampleFormControlInput1">
                    </td>
                    <td>
                        <input type="proceeds" class="form-control" id="exampleFormControlInput1">
                    </td>
                    <td>
                        <input type="availtick" class="form-control" id="exampleFormControlInput1">
                    </td>
                    <td class="text-justify"><i class="fa text-danger fa-times-circle" aria-hidden="true"></i></td>
                    </tr>
                </table>
            </div>

            <!-- Modal footer -->
            <div class="modal-footer m-1 p-2 justify-content-between">

                <button type="button" class="btn btn-light">+ Add another clone</button>
                <div >
                    <button type="button" class="btn btn-light">Save</button>

                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                </div>

            </div>

        </div>
    </div>
</div>

<div class="modal fade container-fluid" id="persexpress">
    <div class="modal-dialog modal-lg">
        <div class="modal-content text-center">
            <!-- Modal Header -->
            <div class="modal-header p-2" style="background: #424549; color: #edf6ff">

                <b>
                    <h4 class="modal-title">Express Local Shipping</h4>
                </b>

                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="form-group modal-body text-left m-3 p-3">
                <p class="row ">

                    By opting in to Express Local Shipping your listings will stay active for longer,giving you a higher chance of selling your tickets.
                </p>
                <p class="row">
                    Tickets for events in the same city as the Ticket Location – the physical location of your ticket – will be available for Express Local Shipping, allowing them to be sold to nearby buyers as close as 4 hours before the event Make sure you’re aware of which locations your listings are registered to – only the tickets at locations in the same city as the event will stay active for longer!
                </p>
                <p class="row">
                    If your tickets sell close to the event (in the sales window limited to Express Local Shipping only), orders will be automatically confirmed and you should be prepared to contact the local courier we recommend using within one hour of the sale, for immediate pick up.
                </p>
                <p class="row">
                    If you are no longer able to dispatch orders this quickly, you must opt out of Express Local Shipping or unpublish you listings or you may incur charges.

                </p>
                <p class="row">
                    You will be able to view instructions on how to arrange the courier with each order. You will have to pay for the courier to make the delivery, and will receive a reimbursement when you receive the proceeds for the sale.
                </p>

            </div>
            <!-- Modal footer -->
            <div class="modal-footer m-1 p-2 justify-content-between">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                    <label class="form-check-label" for="flexCheckDefault">
                        Do not show this again
                    </label>
                </div>

                <div>
                    <button type="button" class="btn btn-success">Confirm</button>
                </div>
            </div>

        </div>
    </div>
</div>

<div class="modal right fade" id="delete">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header p-2" style="background: #424549; color: #edf6ff">
                <h4 class="modal-title" id="staticBackdropLabel">Delete Someting</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
                <form>
                    <p>Are you sure you want to delete this someting?</p>

                </form>
            </div>
            <div class="modal-footer">
                <button class="btn btn-default" data-bs-dismiss="modal">Cancel</button>
                <button type="submit" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
</div>


@endsection