@extends('layouts.app')
@section('content')
<div class="container">
    <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Search</span>
        <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1">
        <button type="button" class="btn btn-light border">Clear</button>
    </div>
    <div class="checkboxes">
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
            <label class="form-check-label" for="defaultCheck1">
                Default checkbox
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
            <label class="form-check-label" for="defaultCheck1">
                Default checkbox
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
            <label class="form-check-label" for="defaultCheck1">
                Default checkbox
            </label>
        </div>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
            <label class="form-check-label" for="defaultCheck1">
                Default checkbox
            </label>
        </div>
    </div>
        <div class="list">
        <table >
        <table >
        @foreach($queenticketeventinfo as $queenticketeventinfo)
                <tr>
                    <td>{{$queenticketeventinfo['ConcertID']}}
                        <i class="fa fa-drop"></i>
                    </td>
                    <td>{{$queenticketeventinfo['ConcertName']}}
                        {{$queenticketeventinfo['ConcertDate']}}
                        {{$queenticketeventinfo['Location']}}
                        <label for="">details</label>
                    </td>
                    <td>
                        <!-- space only -->
                    </td>
                    <td>{{$queenticketeventinfo['Available_Ticket']}}
                        <label for="">Available tickets</label>
                    </td>
                    <td>{{$queenticketeventinfo['Ticket_Sold']}}
                        <label for="">Ticket sold</label>
                    </td>
                    <td>
                        <!-- space only -->
                    </td>
                    <td>{{$queenticketeventinfo['Pending_Fulfillment']}}
                        <label for="">pending fullfilment</label>
                    </td>
                    <td>{{$queenticketeventinfo['StartBuyDate']}}
                        <label for="">date</label>
                    </td>
                    <td>
                        <i class="fa fa-drop"></i>
                    </td>
                </tr>
                @endforeach
            </table>

        </div>

    </div>
    @endsection