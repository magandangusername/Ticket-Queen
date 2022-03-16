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

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">
        <nav class="navbar navbar-expand-lg navbar-light navcolor px-5 py-3 bg-dark">
            <a class="navbar-brand fw-bold text-light" href="#">Queen of Tickets <span class=""><img
                        src="$" alt="" width="30" height="24"></span><h6>Inventory Manager | Listing</h6></a>


            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="justify-content-center collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav position-absolute top-50 end-0 translate-middle-y pe-4" style="font-size: 120%;">
                    <li class="nav-item active">
                        <a class="nav-link text-light" href="">Express Local Shipping</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="">+ New Listing</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle text-light" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Tools
                          </a>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
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

        <main class="py-4">
            @yield('content')
        </main>
    </div>

</body>
</html>
