@extends('layouts.app')
@section('content')
    <div class="container-fluid" style="background-color: #04293A">
        <div class="container-fluid d-flex justify-content-center">
            <div class="container-fluid bg-image position-fixed p-3"
                style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://queenoftickets.com/wp-content/uploads/2021/12/header-8.jpeg'); background-repeat: no-repeat; background-size: cover">
                <div class="input-group mb-3 col-md-8">
                    <span class="input-group-text" id="basic-addon1"><img src="../././public/images/Vector-Search.png"
                            class="img-fluid" alt="..."></span>
                    <input type="Search" id="Search" class="form-control" placeholder="Search" aria-label="Username"
                        aria-describedby="basic-addon1">
                    <button type="button" class="btn btn-light border">Search</button>
                </div>

                <div class="col checkboxes container-fluid row col-md-auto">
                    <div class="form-check form-check-inline text-light col ms-5">
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
            <table class="border table align-middle mb-0 bg-white border-start-1 border-dark" data-bs-toggle="collapse"
                href="#rowcontent" role="button">
                <thead class="bg-light">
                    <tr>
                        <th class="text-center">Ticket Details</th>
                        <th class="text-center"></th>
                        <th class="text-center">Available Tickets</th>
                        <th class="text-center">Ticket Sold</th>
                        <th class="text-center"></th>
                        <th class="text-center">Pending fullfilment</th>
                        <th class="text-center">Days</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody id="tabletickets">
                    <tr>
                        <td>
                            <div class="d-flex align-items-center">
                                <div class="ms-3 pe-5">
                                    <p class="fw-bold text-light mb-1">Artist [Ticket Number]</p>
                                    <p class="text-muted mb-0">Timestamp</p>
                                    <p class="text-muted mb-0">Concert place</p>
                                </div>
                            </div>
                        </td>
                        <td>
                            <!-- <p class="fw-normal mb-1">Software engineer</p> -->
                            <p class="text-muted mb-0">Last Minute Sales Event</p>
                        </td>
                        <td>
                            <p class="fw-normal text-light mb-1">Available Tickets</p>
                            <p class="text-muted mb-0">Number of Tickets</p>
                        </td>
                        <td>
                            <p class="fw-normal text-light mb-1">Ticket Sold</p>
                            <p class="text-muted mb-0">No. of Ticket Sold</p>
                            <div class="border border-dark border-2 container-fluid h-auto bg-danger rounded">
                                <p class="fw-normal mb-1">No. of ticket</p>
                                <p class="text-dark mb-0">Sold in the last</p>
                                <p class="fw-normal mb-1">No. of days</p>
                            </div>
                        </td>
                        <td>
                            <p class="fw-normal text-light mb-1">Pending Confirmation</p>
                            <div class="border border-dark border-2 container-fluid h-auto bg-warning rounded">
                                <p class="text-dark mb-0">No. of Pending</p>
                            </div>
                        </td>
                        <td>
                            <p class="fw-normal text-light mb-1">Pending fullfilment</p>
                            <p class="text-muted mb-0">No. of fulfilled</p>
                        </td>
                        <td>
                            <p class="fw-normal text-light mb-1">No. of Months</p>
                            <p class="text-muted mb-0">Months</p>
                        </td>
                        <td>
                            <button type="button" class="btn btn-link btn-sm btn-rounded">
                                Basta
                            </button>
                        </td>
                    </tr>

                </tbody>
            </table>
            <table class="collapse table table-bordered" id="rowcontent">
                <thead class="bg-light">
                    <tr>
                        <th class="text-center"></th>
                        <th class="text-center">Ticket Details</th>
                        <th class="text-center">Ticket Type</th>
                        <th class="text-center">Visibility</th>
                        <th class="text-center">Face Value</th>
                        <th class="text-center">Price</th>
                        <th class="text-center">Proceeds</th>
                        <th class="text-center">Available</th>
                        <th class="text-center">Sold</th>
                        <th class="text-center">Publish</th>
                        <th class="text-center"></th>
                    </tr>
                </thead>
                <tbody id="ticketinfotable">
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
                                <p id="ticketinfocontent">No. of Tickets</p>
                                <p id="ticketinfocontent">row no. Seat no.</p>
                            </div>
                        </td>
                        <td>
                            <div class="container-fluid">
                                <p id="ticketinfocontent">E-Tickets</p>
                                <a href="#" class="link-primary text-decoration-none">
                                    <p id="ticketinfocontent">Upload Now</p>
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
                                <input type="text" class="form-control d-inline" style="width: 75px">
                                <img src="" alt="" style="width: 20px; height: 20px" class="rounded-circle d-inline" />
                            </div>
                        </td>
                        <td>
                            <div class="container-fluid">
                                <input type="text" class="form-control d-inline" style="width: 75px">
                                <img src="" alt="" style="width: 20px; height: 20px" class="rounded-circle d-inline" />
                            </div>
                        </td>
                        <td>
                            <div class="container-fluid">
                                <input type="text" class="form-control d-inline" style="width: 75px">
                                <img src="" alt="" style="width: 20px; height: 20px" class="rounded-circle d-inline" />
                            </div>
                        </td>
                        <td>
                            <div class="container-fluid">
                                <input type="text" class="form-control d-inline" style="width: 75px">
                                <img src="" alt="" style="width: 20px; height: 20px" class="rounded-circle d-inline" />
                            </div>
                        </td>
                        <td>
                            <div class="container-fluid">
                                <p id="ticketinfocontent">No.</p>
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

                </tbody>
            </table>
        </div>
        <br>





        {{-- <tbody>

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

        </tbody> --}}
        </table>
    </div>



    </div>

    <div class="modal w h-75" id="myModal">
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

                <form>
                    <div class="container-fluid overflow-auto">
                        <div class="row">
                            <div class="form-group col-3">

                                <label for="exampleFormControlInput1">Available Tickets*</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1">
                            </div>

                            <div class="form-group col-3">
                                <label for="exampleFormControlSelect1">Ticket Separation</label>
                                <select class="form-control" id="exampleFormControlSelect1">
                                    <option>Any</option>
                                    <option>None</option>
                                    <option selected>Avoid leaving one ticket</option>
                                    <option>Avoid leaving one or three tickets</option>
                                    <option>Avoid odd numbers</option>
                                </select>
                            </div>
                            <div class="form-group col-3">
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
                            <div class="col-sm-3 my-1">
                                <label class="sr-only" for="inlineFormInputGroupUsername">Website Price*</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">A$</div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroupUsername">
                                </div>
                            </div>

                            <div class="col-sm-3 my-1">
                                <label class="sr-only" for="inlineFormInputGroupUsername">Proceeds*</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <div class="input-group-text">A$</div>
                                    </div>
                                    <input type="text" class="form-control" id="inlineFormInputGroupUsername">
                                </div>
                            </div>
                            <div class="col-sm-3 my-1">
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
                                If any of the following conditions apply to your tickets, please select them from the list
                                below.
                                If there is a restriction on the use of your ticket not shown here, please stop listing and
                                contact us.
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
                    </div>
                </form>


                <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button" class="btn btn-light">Clone</button>
                    <button type="button" class="btn btn-danger">Delete</button>
                    <button type="button" class="btn btn-success">Save</button>
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                </div>

            </div>
        </div>
    </div>
@endsection
