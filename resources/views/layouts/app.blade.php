<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    @yield('head')

    <!-- Icons -->
    <script src="https://kit.fontawesome.com/e4b74e1e72.js" crossorigin="anonymous"></script>

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

<body>
    <div class="vh-100 bg-image" id="app"
        style="background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://queenoftickets.com/wp-content/uploads/2021/12/header-8.jpeg'); background-repeat: no-repeat; background-size: cover">
        <nav class="navbar navbar-expand-lg navbar-light navcolor px-5 py-1 bg-dark position-fixed w-100 navz-index">
            <a class="navbar-brand fw-bold text-light" href="/listing">Queen of Tickets <span class=""><img src="#"
                        alt="" width="30" height="24"></span>
                <h6>Inventory Manager | Listing</h6>
            </a>
            <div class="collapsewidth"></div>


            <button id="nav-button" class="navbar-toggler" type="button" data-toggle="collapse"
                data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>


            <div class="collapse navbar-collapse" id="navbarNavDropdown" style="z-index: 2000">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item active">

                    </li>
                    <li class="nav-item active">
                        <a class="nav-link text-light" data-bs-toggle="modal" data-bs-target="#persexpress"
                            href="">Express Local Shipping</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" data-bs-toggle="modal" data-bs-target="#ListingModal" href="">+
                            New Listing</a>
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
                            <a class="nav-link text-light" href="{{ route('login') }}">{{ __('Login') }}</a>
                        </li>
                        {{-- @if (Route::has('register'))
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Sign-Up</a>
                            </li>
                        @endif --}}
                    @else
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">{{ Auth::user()->name }}</a>
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

    <div class="modal fade container-fluid" id="persexpress">
        <div class="modal-dialog modal-lg">
            <div class="modal-content text-center">
                <!-- Modal Header -->
                <div class="modal-header p-2" style="background: #424549; color: #edf6ff">

                    <b>
                        <h4 class="modal-title">Express Local Shipping</h4>
                    </b>

                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="form-group modal-body text-left m-3 p-3">
                    <p class="row ">

                        By opting in to Express Local Shipping your listings will stay active for longer,giving you a
                        higher chance of selling your tickets.
                    </p>
                    <p class="row">
                        Tickets for events in the same city as the Ticket Location – the physical location of your
                        ticket – will be available for Express Local Shipping, allowing them to be sold to nearby buyers
                        as close as 4 hours before the event Make sure you’re aware of which locations your listings are
                        registered to – only the tickets at locations in the same city as the event will stay active for
                        longer!
                    </p>
                    <p class="row">
                        If your tickets sell close to the event (in the sales window limited to Express Local Shipping
                        only), orders will be automatically confirmed and you should be prepared to contact the local
                        courier we recommend using within one hour of the sale, for immediate pick up.
                    </p>
                    <p class="row">
                        If you are no longer able to dispatch orders this quickly, you must opt out of Express Local
                        Shipping or unpublish you listings or you may incur charges.

                    </p>
                    <p class="row">
                        You will be able to view instructions on how to arrange the courier with each order. You will
                        have to pay for the courier to make the delivery, and will receive a reimbursement when you
                        receive the proceeds for the sale.
                    </p>

                </div>
                <!-- Modal footer -->
                <div class="modal-footer m-1 p-2 justify-content-between">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                        <label class="form-check-label" for="flexCheckDefault">
                            Do not show this again
                        </label>
                    </div>

                    <div>
                        <button type="button" class="btn btn-success" data-bs-toggle="modal"
                            data-bs-target="#express">Confirm</button>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="modal container-fluid" id="express">
        <div class="modal-dialog modal-auto">
            <div class="modal-content text-center">
                <!-- Modal Header -->
                <div class="modal-header p-2" style="background: #424549; color: #edf6ff">

                    <b>
                        <h4 class="modal-title">Express Local Shipping</h4>
                    </b>

                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <!-- Modal body -->
                <div class="form-group modal-body m-1 p-2">
                    <div class="p-2 m-2">
                        <div class="row border text-left p-2">

                            A Ticket Location will only appear here if it is in the postcode range of an Express Local
                            Shipping delivery
                            plan.
                            Remember that only tickets for events in the same city as your Ticket Location will be
                            available for Express
                            Local Shipping.

                        </div>


                        <div class="border row p-2">
                            <div class="col text-left">
                                Queen Trading
                                <br>
                                214 st kilda road, st kilda, Melbourne
                                <br>
                                Melbourne, Victoria, 3189
                                <br>
                                Australia
                            </div>
                            <div class="col ">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckDefault">
                                    <label class="form-check-label" for="flexSwitchCheckDefault">Opt-in</label>
                                </div>
                            </div>
                        </div>


                        <div class="border row p-2">
                            <div class="col text-left">
                                Nicolas Finthal
                                <br>
                                199 roscoe
                                <br>
                                Bondi beach, New South Wales, 2026
                                <br>
                                Australia
                            </div>

                            <div class="col ">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckDefault">
                                    <label class="form-check-label" for="flexSwitchCheckDefault">Opt-in</label>
                                </div>
                            </div>
                        </div>

                        <div class="border row p-2">
                            <div class="col text-left">
                                Matuidi Nicolas
                                <br>
                                15/78 Curlewis St
                                <br>
                                Bondi Beach, New South Wales, 2026
                                <br>
                                Australia
                            </div>

                            <div class="col ">
                                <div class="form-check form-switch ">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckDefault">
                                    <label class="form-check-label" for="flexSwitchCheckDefault">Opt-in</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Modal footer -->
                <div class="modal-footer m-1 p-2">
                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                    data-bs-target="#persexpress"><B class="bold">
                            </B>Back</button>
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
