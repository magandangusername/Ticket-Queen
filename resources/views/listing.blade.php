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

<div class="container-fluid" style="background-color: #04293A">
    <div class="container-fluid d-flex justify-content-center">
        <div class="container-fluid bg-image position-fixed" style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://queenoftickets.com/wp-content/uploads/2021/12/header-8.jpeg'); background-repeat: no-repeat; background-size: cover">
            <div class="input-group col-md-14">
            <form class="input-group col-md-14" method="get" action="/search">
                <span class="input-group-text" id="basic-addon1"><img src="../../../public/images/Vector-Search.png" class="img-fluid" alt="..."></span>
                <input type="search" id="Search" name="search" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
                <button type="button" class="btn btn-light border">Search</button></form></div>

            <div class="checkboxes container-fluid row">
                <div class="form-check form-check-inline text-light col">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        Show All Listings
                    </label>
                </div>
                <div class="form-check form-check-inline text-light col">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        Show Listings Eligible For Last Minute Sales
                    </label>
                </div>
                <div class="form-check form-check-inline text-light col">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        Show Active Listings
                    </label>
                </div>
                <div class="form-check form-check-inline text-light col">
                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                    <label class="form-check-label" for="defaultCheck1">
                        Show Inactive Listings
                    </label>
                </div>
            </div>
            <div id="Tools"></div>
        </div>
    </div>
    <br><br><br><br><br><br><br>
    <br>

    <div class="container-fluid">
        <br>
        <br>
        <table class="table">
            <thead class="thead-light">
                <tr>
                    <th></th>
                    <th class="text-center">Ticket Details</th>
                    <th class="text-center"></th>
                    <th class="text-center">Available Tickets</th>
                    <th class="text-center">Ticket Sold</th>
                    <th class="text-center"></th>
                    <th class="text-center">Days</th>
                    <th></th>
                </tr>
            </thead>
            <tbody id="tabletickets">
                @foreach ($data as $row)
                <tr class="clickable js-tabularinfo-toggle" data-toggle="collapse" id="row2" data-target=".a{{ $row->ConcertID}}">
                    <td>
                        <div class="col-sm-6">
                            <div class="row mb-2">
                                <a href="#" class="link">
                                    <button type="button" name='edit' id='{{ $row->ConcertID}}' class="edit btn btn-xs btn-outline-danger btn-sm my-0">
                                        <i class="fa fa-plus-circle"></i></button>
                                </a>
                            </div>
                        </div>
                    </td>
                    <td>
                        <div class="d-flex align-items-center">
                            <div class="ms-3 pe-5">
                                <p class="fw-bold mb-1">{{$row->ConcertName}} [{{$row->ConcertID}}]</p>
                                <p class="text-muted mb-0">{{$row->ConcertDate}}</p>
                                <p class="text-muted mb-0">{{$row->Location}}</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <!-- <p class="fw-normal mb-1">Software engineer</p> -->
                        <p class="text-muted mb-0">Last Minute Sales Event</p>
                    </td>
                    <td>
                        <p class="fw-normal mb-1">Available Tickets</p>
                        <p class="text-muted mb-0">{{$row->Total_Available}}</p>
                    </td>
                    <td>
                        <p class="fw-normal mb-1">Ticket Sold</p>
                        <p class="text-muted mb-0">{{$row->Total_Sold}}</p>
                    </td>
                    <td>
                        <div class="border border-dark border-2 container-fluid h-auto bg-danger rounded">
                            <p class="fw-normal mb-1">No. of ticket</p>
                            <p class="text-dark mb-0">Sold in the last</p>
                            <p class="fw-normal mb-1">No. of days</p>
                        </div>
                    </td>
                    <td>
                        <p class="text-muted mb-0">2 days</p>
                    </td>
                    <td>

                    </td>
                </tr>
                <tr class="tabularinfo__subblock collapse a{{ $row->ConcertID}}">
                    <td colspan="8">
                        <table class="table-active table table-bordered" id="rowcontent">
                            <tr>
                                <th class="text-center"></th>
                                <th class="text-center">Ticket Details</th>
                                <th class="text-center">Ticket Type</th>
                                <th class="text-center">Visibility</th>
                                <th class="text-center">Price</th>
                                <th class="text-center">Available Tickets</th>
                                <th class="text-center">Sold tickets</th>
                                <th class="text-center">Publish</th>
                                <th class="text-center"></th>
                            </tr>

                            <tbody>
                                @foreach($data2 as $row2)
                                @if ($row->ConcertID == $row2->ConcertID)
                                <tr>
                                    <td>
                                        <div class="container-fluid">
                                            <div class="form-check">
                                                <input class="form-check-input ms-3" type="checkbox" value="" id="ticketselection">
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="container-fluid">
                                            <p>{{$row2->Section}}</p>
                                            <p>{{$row2->Row}} {{$row2->Seats}}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="container-fluid">
                                            <p>{{$row2->Ticket_Type}}</p>
                                            <a href="#" class="link-primary text-decoration-none">
                                                <p>Upload Now</p>
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="container-fluid">
                                            <p class="text-warning">No. %</p>
                                        </div>
                                    </td>

                                    <td>
                                        <div class="container-fluid">
                                            <input type="text" class="form-control d-inline" style="width: 75px" value="{{$row2->Price}}">
                                            <img src="" alt="" style="width: 20px; height: 20px" class="rounded-circle d-inline" />
                                        </div>
                                    </td>

                                    <td>
                                        <div class="container-fluid">
                                            <input type="text" class="form-control d-inline" style="width: 75px" value="{{$row2->Available_Tickets}}">
                                            <img src="" alt="" style="width: 20px; height: 20px" class="rounded-circle d-inline" />
                                        </div>
                                    </td>
                                    <td>
                                        <div>
                                            <p>{{$row2->Ticket_Sold}}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <div class="form-check form-switch">
                                            <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                                            <img src="" alt="" style="width: 20px; height: 20px" class="rounded-circle d-inline" />
                                        </div>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-link btn-sm btn-rounded">
                                            Basta
                                        </button>
                                    </td>
                                </tr>
                                @endif

                                @endforeach
                            </tbody>
                        </table>
                    </td>
                </tr>

                @endforeach
            </tbody>
        </table>
        <br>

        <tbody>
            <tr>
                <td>
                    <div class="container-fluid">
                        <div class="form-check">
                            <input class="form-check-input ms-3" type="checkbox" value="" id="ticketselection">
                        </div>
                    </div>
                </td>
                <td>
                    <div class="container-fluid">
                        <p>No. of Tickets</p>
                        <p>row no. Seat no.</p>
                    </div>
                </td>
                <td>
                    <div class="d-flex align-items-center">
                    </div>
                </td>
                <td>
                    <div class="d-flex align-items-center">
                    </div>
                </td>
                <td>
                    <div class="d-flex align-items-center">
                    </div>
                </td>
                <td>
                    <div class="d-flex align-items-center">
                    </div>
                </td>
                <td>
                    <div class="d-flex align-items-center">
                    </div>
                </td>
                <td>
                    <div class="d-flex align-items-center">
                    </div>
                </td>
                <td>
                    <div class="d-flex align-items-center">
                    </div>
                </td>
                <td>
                    <div class="d-flex align-items-center">
                    </div>
                </td>
                <td>
                    <div class="d-flex align-items-center">
                    </div>
                </td>
                <td>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                        Open modal
                    </button>
                </td>
            </tr>
        </tbody>
        </table>
    </div>



</div>

<div class="modal w-100" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">

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


            <div class="row">
                <div class="container-fluid col-7 sm">
                    <form>
                        <div class="row">
                            <div class="form-group col-2">

                                <label for="exampleFormControlInput1">Available Tickets*</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1">
                            </div>

                            <div class="form-group col-2">
                                <label for="exampleFormControlSelect1">Ticket Separation</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Any</option>
                                    <option>None</option>
                                    <option selected>Avoid leaving one ticket</option>
                                    <option>Avoid leaving one or three tickets</option>
                                    <option>Avoid odd numbers</option>
                                </select>
                            </div>
                            <div class="form-group col-2">
                                <label for="exampleFormControlInput1">Quantity Sold</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1">
                            </div>

                        </div>

                        <div class="row">
                            <div class="form-group col-3">
                                <label for="exampleFormControlInput1">Section*</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1">
                            </div>

                            <div class="form-group col-3    ">
                                <label for="exampleFormControlInput1">Row</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-sm-3 my-1">
                                <label class="sr-only" for="inlineFormInputGroupUsername">Seats*</label>
                                <div class="input-group">
                                    <input type="text" class="form-control" id="inlineFormInputGroupMinimum">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">To</div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroupMaximum">
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-sm-2 my-1">
                                <label class="sr-only" for="inlineFormInputGroupUsername">Website Price*</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">A$</div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroupUsername">
                                </div>
                            </div>

                            <div class="col-sm-2 my-1">
                                <label class="sr-only" for="inlineFormInputGroupUsername">Proceeds*</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">A$</div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroupUsername">
                                </div>
                            </div>
                            <div class="col-sm-2 my-1">
                                <label for="exampleFormControlSelect1">Ticket Separation</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>AUD</option>
                                    <option>AED</option>
                                    <option>ARS</option>
                                </select>
                            </div>

                        </div>

                        <div class="row">
                            <div class="form-group col-3">
                                <label for="exampleFormControlInput1">Face Value*</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1">
                            </div>

                            <div class="form-group col-3">
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
                            <div class="listboxes col-6 col-md-4 w-25">
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show All Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Listings Eligible For Last Minute Sales
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Active Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show All Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Listings Eligible For Last Minute Sales
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Active Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                            </div>
                            <div class="listboxes col-6 col-md-4 w-25">
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show All Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Listings Eligible For Last Minute Sales
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Active Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show All Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Listings Eligible For Last Minute Sales
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Active Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <br>
                            <p>
                                <b>Listing notes</b>
                            </p>
                        </div>

                        <div class="row">
                            <div class="listboxes col-6 col-md-4 w-25">
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show All Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Listings Eligible For Last Minute Sales
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Active Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show All Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Listings Eligible For Last Minute Sales
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Active Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                            </div>
                            <div class="listboxes col-6 col-md-4 w-25">
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show All Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Listings Eligible For Last Minute Sales
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Active Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show All Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Listings Eligible For Last Minute Sales
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Active Listings
                                    </label>
                                </div>
                                <div class="form-check ms-5">
                                    <input class="form-check-input" type="checkbox" value="" id="defaultCheck2">
                                    <label class="form-check-label" for="defaultCheck1">
                                        Show Inactive Listings
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-4 m-2">
                    <div class="form-check form-switch border">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Publish</label>
                    </div>
                    <div class="border">
                        <label class="form-label" for="">Sold Status</label>
                        <br>
                        <label class="form-label" for="">blah blah</label>
                    </div>
                    <div class="border">
                        <label class="form-label" for="">Listing ID</label>
                        <br>
                        <label class="form-label" for="">1232132131</label>
                    </div>
                    <div class="border">
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


<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
</script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
</script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
</script>

<script>
    $(document).ready(function() {
        $('.link').click(function() {
            event.preventDefault();
        });
        $('.js-tabularinfo').bootstrapTable({
            escape: false,
            showHeader: false
        });
    });
</script>

@endsection