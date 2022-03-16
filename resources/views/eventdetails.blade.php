@extends('layouts.app')
@section('content')
<div class="container">
        <table class="table table-bordered border-primary" id="rowcontent">
            <thead class="bg-light">
            <tr>
                <th></th>
                <th>Ticket Details</th>
                <th>Ticket Type</th>
                <th>Visibility</th>
                <th>Face Value</th>
                <th>Price</th>
                <th>Available</th>
                <th>Sold</th>
                <th>Publish</th>
                <th></th>
            </tr>
            </thead>
            
            <tbody>
            @foreach($data2 as $row)
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
                <p>{{$row->Section}}</p>
                <p>{{$row->Row}}</p>
                <p>{{$row->Seats}}</p>
            </div>
            </td>
            <td>{{$row->Ticket_Type}}
            <div class="d-flex align-items-center">
            </div>
            </td>
            <td>0
            <div class="d-flex align-items-center">
            </div>
            </td>
            <td>0
            <div class="d-flex align-items-center">
            </div>
            </td>
            <td>{{$row->Price}}
            <div class="d-flex align-items-center">
            </div>
            </td>
            <td>{{$row->Available_Tickets}}
            <div class="d-flex align-items-center">
            </div>
            </td>
            <td>{{$row->Ticket_Sold}}
            <div class="d-flex align-items-center">
            </div>
            </td>
            <td>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                    </div>
                    </td>
                    <td>
            <button type="button" class="btn btn-link btn-sm btn-rounded">
                Basta
            </button>
            </td>
        </tr>
        @endforeach
        </tbody>
        </table>
    </div>
    </div>
    @endsection