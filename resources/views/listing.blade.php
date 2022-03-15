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
                <tr>
                    <td>
                        <i class="fa fa-drop"></i>
                    </td>
                    <td>
                        <label for="">details</label>
                    </td>
                    <td>
                        <!-- space only -->
                    </td>
                    <td>
                        <label for="">Available tickets</label>
                    </td>
                    <td>
                        <label for="">Ticket sold</label>
                    </td>
                    <td>
                        <!-- space only -->
                    </td>
                    <td>
                        <label for="">pending fullfilment</label>
                    </td>
                    <td>
                        <label for="">date</label>
                    </td>
                    <td>
                        <i class="fa fa-drop"></i>
                    </td>
                </tr>
            </table>
        </div>

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
                <tr>
                    <td>
                        <input class="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="...">
                    </td>
                    <td>
                        <p>something</p>
                    </td>
                    <td>
                       <a href="Upload"></a>
                    </td>
                    <td>
                        <input type="text" name="" id="">
                    </td>
                    <td>
                        <input type="text" name="" id="">
                    </td>
                    <td>
                        <input type="text" name="" id="">
                    </td>
                    <td>
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
            </table>
        </div>

    </div>
    @endsection