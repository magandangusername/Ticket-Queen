@extends('layouts.app')

@section('head')
<title>Sales</title>
@endsection


@section('content')
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#express">
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


<div class="modal container-fluid" id="myModal">
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
</div>

<div class="modal container-fluid" id="tiks">
    <div class="modal-dialog modal-sm">
        <div class="modal-content text-center">
            <!-- Modal Header -->
            <div class="modal-header m-1 p-2">

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
            <div class="modal-footer m-1 p-2">
                <button type="button" class="btn btn-secondary"><b>
                        < </b>Back</button>
            </div>

        </div>
    </div>
</div>

<div class="modal container-fluid" id="express">
    <div class="modal-dialog modal-auto">
        <div class="modal-content text-center">
            <!-- Modal Header -->
            <div class="modal-header m-1 p-2">

                <b>
                    <h4 class="modal-title">Express Local Shipping</h4>
                </b>

                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="form-group modal-body m-1 p-2">
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
                            <div class="form-check form-switch " >
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                <label class="form-check-label" for="flexSwitchCheckDefault">Opt-in</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Modal footer -->
            <div class="modal-footer m-1 p-2">
                <button type="button" class="btn btn-secondary"><B class="bold">
                        < </B>Back</button>
            </div>

        </div>
    </div>
</div>

@endsection