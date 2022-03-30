@extends('layouts.app')

@section('head')
<title>Sales</title>
@endsection


@section('content')
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#ul">
    Open modal
</button>


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

<div class="modal container-fluid" id="ul">
    <div class="modal-dialog modal-lg">
        <div class="modal-content text-center">
            <!-- Modal Header -->
            <div class="modal-header m-1 p-2">

                <b>
                    <h4 class="modal-title">Express Local Shipping</h4>
                </b>

                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="form-group modal-body m-1 p-3">
                <ul class="list-group">
                    <li class="list-group-item">
                        A Ticket Location will only appear here if it is in the postcode range of an Express Local Shipping delivery
                        plan.
                        Remember that only tickets for events in the same city as your Ticket Location will be available for Express
                        Local Shipping.
                    </li>


                    <li class="list-group-item">
                        Queen Trading
                        <br>
                        214 st kilda road, st kilda, Melbourne
                        <br>
                        Melbourne, Victoria, 3189
                        <br>
                        Australia

                        <div class="position-absolute top-50 end-0 translate-middle-y">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                <label class="form-check-label" for="flexSwitchCheckDefault">Opt-in</label>
                            </div>
                        </div>
                    </li>


                    <li class="list-group-item">
                        Nicolas Finthal
                        <br>
                        199 roscoe
                        <br>
                        Bondi beach, New South Wales, 2026
                        <br>
                        Australia

                        <div class="position-absolute top-50 end-0 translate-middle-y">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                <label class="form-check-label" for="flexSwitchCheckDefault">Opt-in</label>
                            </div>
                        </div>
                    </li>

                    <li class="list-group-item">
                        Matuidi Nicolas
                        <br>
                        15/78 Curlewis St
                        <br>
                        Bondi Beach, New South Wales, 2026
                        <br>
                        Australia

                        <div class="position-absolute top-50 end-0 translate-middle-y">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                                <label class="form-check-label" for="flexSwitchCheckDefault">Opt-in</label>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <!-- Modal footer -->
            <div class="modal-footer m-1 p-2">
                <button type="button" class="btn btn-secondary"><b>
                        < </b>Back</button>
            </div>

        </div>
    </div>
</div>

@endsection