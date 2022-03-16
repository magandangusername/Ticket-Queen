@extends('layouts.app')
@section('content')
<div class="container-fluid">
    <div class="container-fluid">
        <div class="container-fluid row no-gutters">
            <div class="input-group mb-3 col-12 col-sm-6 col-md-8 w-75 h-25">
            <span class="input-group-text" id="basic-addon1"><img src="../../../public/images/Vector-Search.png" class="img-fluid" alt="..."></span>
            <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
            <button type="button" class="btn btn-light border">Clear</button>
            </div>
            <div class="checkboxes col-6 col-md-4 w-25">
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
    </div>
    
    <div class="container-fluid">
        <table class="table align-middle mb-0 bg-white" data-bs-toggle="collapse" href="#rowcontent" role="button">
        <thead class="bg-light">
        <tr>
            <th>Ticker Details</th>
            <th></th>
            <th>Available Tickets</th>
            <th>Ticket Sold</th>
            <th></th>
            <th>Pending fullfilment</th>
            <th>Days</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>
            <div class="d-flex align-items-center">
                <!-- <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style="width: 45px; height: 45px"
                    class="rounded-circle"
                    /> -->
                <div class="ms-3 pe-5">
                <p class="fw-bold mb-1">Artis [Ticket Number]</p> 
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
            <p class="fw-normal mb-1">Available Tickets</p>
            <p class="text-muted mb-0">Number of Tickets</p>
            </td>
            <td>
            <p class="fw-normal mb-1">Ticket Sold</p>
            <p class="text-muted mb-0">No. of Ticket Sold</p>
            <div class="border border-dark border-2 container-fluid h-auto bg-danger rounded">
            <p class="fw-normal mb-1">No. of ticket</p>
            <p class="text-dark mb-0">Sold in the last</p>
            <p class="fw-normal mb-1">No. of days</p>
            </div>
            </td>
            <td>
            <p class="fw-normal mb-1">Pending Confirmation</p>
            <div class="border border-dark border-2 container-fluid h-auto bg-warning rounded">
            <p class="text-dark mb-0">No. of Pending</p>   
            </div>
            </td>
            <td>
            <p class="fw-normal mb-1">Pending fullfilment</p>
            <p class="text-muted mb-0">No. of fulfilled</p>
            </td>
            <td>
                <p class="fw-normal mb-1">No. of Months</p>
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
        <table class="collapse table table-bordered border-primary" id="rowcontent">
            <thead class="bg-light">
            <tr>
                <th></th>
                <th>Ticket Details</th>
                <th>Ticket Type</th>
                <th>Visibility</th>
                <th>Face Value</th>
                <th>Price</th>
                <th>Proceeds</th>
                <th>Available</th>
                <th>Sold</th>
                <th>Publish</th>
                <th></th>
            </tr>
            </thead>
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
            <button type="button" class="btn btn-link btn-sm btn-rounded">
                Basta
            </button>
            </td>
        </tr>
        
        </tbody>
        </table>
    </div>
   
    

</div>
@endsection