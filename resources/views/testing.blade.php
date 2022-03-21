@extends('layouts.app')

@section('head')
<title>Sales</title>
@endsection


@section('content')
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
    Open modal
</button>


<div class="modal w-100" id="myModal">
    <div class="modal-dialog">
        <div class="modal-content">

            <!-- Modal Header -->
            <div class="modal-header m-1 p-2">

                <h4>Create New Listing</h4>

                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>

            <!-- Modal body -->
            <div class="m-1 p-2">

                <div class="box">
                    <input type="text" class="form-control" name="" placeholder="Search by Event, Venue, City">
                </div>
                <form action="" class="row">
                    <div class="col">
                        <label for="date">From</label><br>
                        <input class="form-control" type="date" id="date" name="date">
                    </div>

                    <br>
                    <div class="col">
                        <label for="date">To</label><br>
                        <input class="form-control" type="date" id="date" name="date">
                    </div>
                </form>
                <table class="table">
                    <tbody>
                        <tr>
                            <td>
                                Thu
                                <br>
                                17 Mar 2022
                                <br>
                                19:00
                            </td>
                            <td>
                                Genesis
                                <br>
                                Paris La Defense Arena
                                <br>
                                Nanterre
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br>
            </div>
            <!-- Modal footer -->
            <div class="modal-footer m-1 p-2">
                <button type="button" class="btn btn-primary">+ Request an event</button>
            </div>

        </div>
    </div>
</div>

@endsection