@extends('layouts.app')

@section('head')
<title>Sales</title>
@endsection


@section('content')

<h4>Concert name</h4>
<p>
    <b>Date</b>
    <br>
<Address></Address>
</p>
<div class="container-fluid overflow-auto">
    <form>
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

<button type="button" class="btn btn-light">Clone</button>
<button type="button" class="btn btn-danger">Delete</button>
<button type="button" class="btn btn-success">Save</button>
<button type="button" class="btn btn-secondary">Cancel</button>

<div class="form-check form-switch">
    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
    <label class="form-check-label" for="flexSwitchCheckDefault">Publish</label>
</div>
@endsection