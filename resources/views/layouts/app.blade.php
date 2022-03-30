<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @yield('head')

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body class="vh-100"
    style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://queenoftickets.com/wp-content/uploads/2021/12/header-8.jpeg'); background-repeat: no-repeat; background-size: cover">
    <div id="app"
        style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://queenoftickets.com/wp-content/uploads/2021/12/header-8.jpeg'); background-repeat: no-repeat; background-size: cover">
        <nav class="navbar navbar-expand-lg navbar-light navcolor px-5 py-1 bg-dark position-fixed w-100 navz-index">
            <a class="navbar-brand fw-bold text-light" href="#">Queen of Tickets <span class=""><img src="#"
                        alt="" width="30" height="24"></span>
                <h6>Inventory Manager | Listing</h6>
            </a>
            <div class="w-50">
                <form class="form-control d-flex w-100 m-auto justify-content-evenly" method="get" action="/search">
                    <input class="w-100 d-flex justify-content-center" type="text" placeholder="Search.." name="search2">
                    <button type="submit"><i class="fa fa-search d-flex justify-content-center"></i></button>
                </form>
            </div>
            
            <button id="nav-button" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            
            <div class="collapse navbar-collapse" id="navbarNavDropdown" style="z-index: 2000">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item active">
                        
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link text-light" href="">Express Local Shipping</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" data-bs-toggle="modal" data-bs-target="#ListingModal"
                            href="">+ New Listing</a>
                    </li>
                    {{-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-light" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Tools
                          </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li> --}}
                    @guest
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">{{ __('Login') }}</a>
                        </li>
                        {{-- @if (Route::has('register'))
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Sign-Up</a>
                            </li>
                        @endif --}}
                    @else
                        <li class="nav-item">
                            <a class="nav-link" href="#">{{ Auth::user()->first_name }}</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link text-light" href="{{ route('logout') }}"
                                onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                Logout
                            </a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                {{ csrf_field() }}
                            </form>
                        </li>
                    @endguest
                </ul>
            </div>

        </nav>
        <br>
        <br>

        <main class="py-4">
            @yield('content')
        </main>

    </div>
    <div class="modal w-100" id="ListingModal">
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
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#ReqEventModal">+ Request an event</button>
                </div>

            </div>
        </div>
    </div>

    <div class="modal container-fluid" id="ReqEventModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <!-- Modal Header -->
                <div class="modal-header m-1 p-2">

                    <h4 class="m-1 p-2">Request an event</h4>
                    <p class="m-1 p-2">Can't find the event you're looking for?
                        Enter the details below and you can start listing immediately.
                        Once our support team approves the event, your tickets will become active on our website.
                    </p>

                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="form-group m-1 p-3">
                    <form>
                        <div class="row">
                            <label for="exampleFormControlInput1">Artist, Home Team, Tournament, Festival or
                                Show*</label>
                            <input type="show" class="" id="exampleFormControlInput1"
                                placeholder="Search">
                        </div>
                        <div class="row">
                            <label for="exampleFormControlSelect1">Event*</label>
                            <input type="event" class="" id="exampleFormControlInput1">
                        </div>
                        <div class="row">
                            <label for="date">Event Date/Time*</label>
                            <input type="date" class="col me-1" id="date" name="date">
                            <select class="col ms-1" id="exampleFormControlSelect1">
                                <option>times</option>
                            </select>
                        </div>
                        <div class="row">
                            <label for="exampleFormControlInput1">Venue*</label>
                            <input type="venue" class="" placeholder="Search">
                        </div>
                        <div class="row">
                            <label for="exampleFormControlInput1">City*</label>
                            <input type="city" class=" ">
                        </div>
                        <div class="row">
                            <label for="exampleFormControlSelect1">Country*</label>
                            <select class="" id="exampleFormControlSelect1">
                                <option selected>Albania</option>
                                <option>Algeria</option>
                                <option>American Samoa</option>
                                <option>Andorra</option>
                                <option>Angola</option>
                            </select>
                        </div>
                        <div class="row">

                            <label for="exampleFormControlInput1">Onsale</label>
                            <input type="date" class="col me-1" id="date" name="date">

                            <select class="col ms-1" id="exampleFormControlSelect1">
                                <option>times</option>
                            </select>
                        </div>
                        <div class="row">
                            <label for="exampleFormControlInput1">Face Value</label>
                            <select class="col me-1" id="exampleFormControlSelect1">
                                <option>Euro</option>
                                <option>Hong Kong Dollar</option>
                                <option>Croatian Kuna</option>
                                <option>Japanese Yen</option>
                                <option>South Korean Won</option>
                            </select>
                            <input type="valmin" class="col mx-1" id="exampleFormControlInput1"
                                placeholder="Face Value Min">
                            <input type="valmax" class="col ms-1" id="exampleFormControlInput1"
                                placeholder="Face Value Max">
                        </div>
                        <div class="row">
                            <label for="exampleFormControlInput1">Event Url and Notes*</label>
                            <input type="venue" class="" id="exampleFormControlInput1">

                        </div>
                    </form>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer m-1 p-2">
                    <button type="button" class="btn btn-secondary"><b>
                            << /b> Back</button>
                    <button type="button" class="btn btn-success">Submit</button>
                </div>

            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
    </script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous">
    </script>

</body>

</html>
