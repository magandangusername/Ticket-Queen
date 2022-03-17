@extends('layouts.app')
@section('content')
<div class="container-fluid" style="background-color: #04293A">
    <div class="container-fluid d-flex justify-content-center">
        <div class="container-fluid bg-image position-fixed p-3" style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://queenoftickets.com/wp-content/uploads/2021/12/header-8.jpeg'); background-repeat: no-repeat; background-size: cover">
            <div class="input-group mb-3 col-md-8">
                <span class="input-group-text" id="basic-addon1"><img src="../././public/images/Vector-Search.png" class="img-fluid" alt="..."></span>
                <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
                <button type="button" class="btn btn-light border">Clear</button>
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
            <hr class="bg-information border-2 border-top border-information">
            <div class="container-fluid row col-md-auto">
                <div class="d-inline col container-fluid">
                    <a class="text-decoration-none text-light col" href="">
                    Publish All Selected
                    </a>
                </div>
                <div class="d-inline col">
                    <a class="text-decoration-none text-light col" href="">
                    Unpublish All Selected
                    </a>
                </div>
                <div class="col">
                    <a class="text-decoration-none text-light col" href="">
                    Delete All Selected
                    </a>
                </div>
                <div class="d-inline col">
                   <a class="text-decoration-none text-light col" href="">
                    Change to Paper Tickets
                    </a>
                </div>
                <div class="d-inline col">
                    <a class="text-decoration-none text-light col" href="">
                    Change to E-Tickets
                    </a>
                </div>
                <div class="col">
                    <a class="text-decoration-none text-light col" href="">
                    Opt In to Last Minute Sales All Selected
                    </a>
                </div>
                <div class="col">
                    <a class="text-decoration-none text-light col" href="">
                    Opt Out of Last Minute Sales All Selected
                    </a>
                </div>
            </div>
        </div>
    </div>
    <br><br><br><br><br><br><br>
    <br>
    
    <div class="container-fluid">
    <br>
    <br>
        <table class="border table align-middle mb-0 bg-white border-start-1 border-dark" data-bs-toggle="collapse" href="#rowcontent" role="button">
        <thead class="bg-light">
        <tr>
            <th>Ticket Details</th>
            <th></th>
            <th>Available Tickets</th>
            <th>Ticket Sold</th>
            <th></th>
            <th>Pending fullfilment</th>
            <th>Days</th>
            <th></th>
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
                <p class="fw-bold mb-1">Artist [Ticket Number]</p> 
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
            <div class="container-fluid">
                <p>E-Tickets</p>
                <a href="#" class="link-primary text-decoration-none"><p>Upload Now</p></a>
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
                <img
                    src=""
                    alt=""
                    style="width: 20px; height: 20px"
                    class="rounded-circle d-inline"
                    />
            </div>
            </td>
            <td>
            <div class="container-fluid">
                <input type="text" class="form-control d-inline" style="width: 75px">
                <img
                    src=""
                    alt=""
                    style="width: 20px; height: 20px"
                    class="rounded-circle d-inline"
                    />
            </div>
            </td>
            <td>
            <div class="container-fluid">
                <input type="text" class="form-control d-inline" style="width: 75px">
                <img
                    src=""
                    alt=""
                    style="width: 20px; height: 20px"
                    class="rounded-circle d-inline"
                    />
            </div>
            </td>
            <td>
            <div class="container-fluid">
                <input type="text" class="form-control d-inline" style="width: 75px">
                <img
                    src=""
                    alt=""
                    style="width: 20px; height: 20px"
                    class="rounded-circle d-inline"
                    />
            </div>
            </td>
            <td>
            <div class="container-fluid">
                <p class="text-dark">No.</p>
            </div>
            </td>
            <td>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                <img
                    src=""
                    alt=""
                    style="width: 20px; height: 20px"
                    class="rounded-circle d-inline"
                    />
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
    
   
   
    

</div>
@endsection