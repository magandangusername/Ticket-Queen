@extends('layouts.app')
@section('content')
<div class="container">
            <div class="ticket-details">
            <table >
                <th></th>
                <th>ticket details</th>
                <th>ticket type</th>
                <th>face value</th>
                <th>price</th>
                <th>avaible</th>
                <th>sold</th>
                <th>publish</th>
                <th></th>
                @foreach($data2 as $row)
                <tr>
                    <td>
                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
                    </td>
                    <td>{{$row->Listing_ID}}
                        <p>something</p>
                    </td>
                    <td>{{$row->Ticket_Type}}
                       <a href="Upload"></a>
                    </td>
                    <td> {{$row->Section}}
                         {{$row->Row}}
                         {{$row->Seats}}
                        <input type="text" name="" id="">
                    </td>
                    <td>{{$row->Price}}
                        <input type="text" name="" id="">
                    </td>
                    <td>{{$row->Available_Tickets}}
                        <input type="text" name="" id="">
                    </td>
                    <td>{{$row->Ticket_Sold}}
                        <label for="">0</label>
                    </td>
                    <td>{{$row->ConcertID}}
                        <label for="">0</label>
                    </td>
                    <td>
                    <div class="form-check form-switch">
                        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                    </div>
                    </td>
                    <td>
                        <i class="fa fa-pen"></i>
                    </td>
                </tr>
              @endforeach
            </table>
        </div>

    </div>
    @endsection