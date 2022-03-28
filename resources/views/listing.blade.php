@extends('layouts.app')
@section('content')
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Bootstrap CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>


{{-- <div class="container-fluid bg.transparent" style="">
    
</div> --}}
<div id="ListingTable"></div>


<div class="modal" id="myModal">
    <div class="modal-dialog modal-lg" style=" overflow-y: initial !important">
        <div class="modal-content" style="max-height: px;">
            <!-- Modal Header -->
            <div class="modal-header">

                <h4>Concert name</h4>
                <p>
                    <b>Date</b>
                    <br>
                <Address></Address>
                </p>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="row modal-body" style=" height: 70vh; ">
                <div class="container-fluid col" style="overflow-y: scroll; max-height:100%;">
                    <form>
                        <div class="row">
                            <div class="form-group col">

                                <label for="exampleFormControlInput1">Available Tickets*</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1">
                            </div>

                            <div class="form-group col">
                                <label for="exampleFormControlSelect1">Ticket Separation</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Any</option>
                                    <option>None</option>
                                    <option selected>Avoid leaving one ticket</option>
                                    <option>Avoid leaving one or three tickets</option>
                                    <option>Avoid odd numbers</option>
                                </select>
                            </div>
                            <div class="form-group col">
                                <label for="exampleFormControlInput1">Quantity Sold</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1">
                            </div>

                        </div>

                        <div class="row">
                            <div class="form-group col">
                                <label for="exampleFormControlInput1">Section*</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1">
                            </div>

                            <div class="form-group col">
                                <label for="exampleFormControlInput1">Row</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label class="" for="#inlineFormInputGroupUsername">Seats</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="inlineFormInputGroupMinimum">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">To</div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroupMaximum">
                                </div>
                            </div>
                        </div>

                        <div class="row my-1">
                            <div class="col">
                                <label class="" for="inlineFormInputGroupUsername">Website Price*</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">A$</div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroupUsername">
                                </div>
                            </div>

                            <div class="col">
                                <label class="" for="inlineFormInputGroupUsername">Proceeds*</label>
                                <div class="input-group ">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">A$</div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroupUsername">
                                </div>
                            </div>
                            <div class="col">
                                <label for="exampleFormControlSelect1">Ticket Separation</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>AUD</option>
                                    <option>AED</option>
                                    <option>ARS</option>
                                </select>
                            </div>

                        </div>

                        <div class="row">
                            <div class="form-group col>
                                <label for=" exampleFormControlInput1">Face Value*</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1">
                            </div>

                            <div class="form-group col">
                                <label for="exampleFormControlInput1">Max Display Quantity*</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1">
                            </div>
                        </div>
                        <div class="row">
                            <br>
                            <p>
                                <b>Select Restrictions on Use</b>
                                <br>
                                If any of the following conditions apply to your tickets, please select them from the list below.
                                If there is a restriction on the use of your ticket not shown here, please stop listing and contact us.
                                <br>
                            </p>
                        </div>
                        <div class="row">
                            <div class="listboxes col">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show All Listings
                                    </label>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Listings Eligible For Last Minute Sales
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Active Listings
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show All Listings
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Listings Eligible For Last Minute Sales
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Active Listings
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                            </div>
                            <div class="listboxes col">
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show All Listings
                                    </label>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Listings Eligible For Last Minute Sales
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Active Listings
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show All Listings
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Listings Eligible For Last Minute Sales
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Active Listings
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <b>Listing notes</b>
                        </div>

                        <div class="row">
                            <div class="listboxes col">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show All Listings
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Listings Eligible For Last Minute Sales
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Active Listings
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show All Listings
                                    </label>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Listings Eligible For Last Minute Sales
                                    </label>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Active Listings
                                    </label>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                            </div>
                            <div class="listboxes col">
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show All Listings
                                    </label>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Listings Eligible For Last Minute Sales
                                    </label>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Active Listings
                                    </label>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show All Listings
                                    </label>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Listings Eligible For Last Minute Sales
                                    </label>
                                </div>
                                <div class="form-check ">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Active Listings
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-3">
                    <div class="form-check form-switch border p-1">
                        <input class="form-check-input ms-auto" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        <label class="form-check-label ms-5" for="flexSwitchCheckDefault">Publish</label>
                    </div>
                    <div class="border p-1">
                        <label class="form-label" for="">Sold Status</label>
                        <br>
                        <label class="form-label" for="">blah blah</label>
                    </div>
                    <div class="border p-1">
                        <label class="form-label" for="">Listing ID</label>
                        <br>
                        <label class="form-label" for="">1232132131</label>
                    </div>
                    <div class="border p-1">
                        <label class="form-label" for="">Ticket Type</label>
                        <br>
                        <label class="form-label" for="">E-ticket</label>
                    </div>
                </div>



            </div>
            <!-- Modal footer -->
            <div class="modal-footer">
                <button type="button" class="btn btn-light float-sm-start">Clone</button>
                <button type="button" class="btn btn-danger float-sm-start">Delete</button>
                <button type="button" class="btn btn-success float-sm-end">Save</button>
                <button type="button" class="btn btn-secondary float-sm-end">Cancel</button>
            </div>

        </div>
    </div>
</div>

<div class="modal container-fluid" id="magnify">
        <div class="modal-dialog modal-lg">
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
                        <p class="col-1 ">Sales</p>
                        <p class="col-2 ms-auto">Filter By: </p>
                        <div class="form-group col-3">
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>All Sections</option>
                                <option>6</option>
                            </select>
                        </div>
                        <div class="form-group col-3">
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>All Venue Areas</option>
                            </select>
                        </div>
                        <div class="form-group col-3    ">
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
                    
                </div>

            </div>
        </div>
</div>


    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>
    @endsection