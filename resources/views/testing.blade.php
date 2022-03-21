@extends('layouts.app')

@section('head')
<title>Sales</title>
@endsection


@section('content')
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
</button>



<div class="modal"  id="myModal">
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
                <div class="container-fluid col-8 sm">
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
                <div class="col-2 m-1">
                    <div class="form-check form-switch border">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Publish</label>
                    </div>
                    <div class="form-check form-switch border">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Sold Status</label>
                        <br>
                        <label class="form-check-label" for="flexSwitchCheckDefault">blah blah</label>
                    </div>
                    <div class="form-check form-switch border">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Listing ID</label>
                        <br>
                        <label class="form-check-label" for="flexSwitchCheckDefault">1232132131</label>
                    </div>
                    <div class="form-check form-switch border">
                        <label class="form-check-label" for="flexSwitchCheckDefault">Ticket Type</label>
                        <br>
                        <label class="form-check-label" for="flexSwitchCheckDefault">E-ticket</label>
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



</div>
@endsection