@extends('layouts.app')

@section('head')
    <title>Sales</title>
@endsection

@section('content')
    <div class="grid" style="--bs-columns: 3;">
        <div class="container">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Search</span>
                <input type="text" class="form-control" placeholder="Search" aria-label="Username"
                    aria-describedby="basic-addon1">
            </div>
            <div class="row align-items-start">
                <div class="col">
                    <button type="button" class="btn btn-light">Light</button>
                    <button type="button" class="btn btn-light">Light</button>
                    <button type="button" class="btn btn-light">Light</button>
                    <button type="button" class="btn btn-light">Light</button>
                    <button type="button" class="btn btn-light">Light</button>
                    <button type="button" class="btn btn-light">Light</button>
                </div>


                <div class="col">

                    <div class="btn-group">
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Small button
                        </button>
                        <ul class="dropdown-menu">
                            ...
                        </ul>
                    </div>
                    <div class="btn-group">
                        <button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Small button
                        </button>
                        <ul class="dropdown-menu">
                            ...
                        </ul>
                    </div>
                </div>
                <div class="grid">
                    <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white" style="width: 380px;">
                        <a href="/"
                            class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom">
                            <svg class="bi me-2" width="30" height="24">
                                <use xlink:href="#bootstrap"></use>
                            </svg>
                            <span class="fs-5 fw-semibold">List group</span>
                        </a>
                        <div class="list-group list-group-flush border-bottom scrollarea">
                            <a href="#" class="list-group-item list-group-item-action active py-3 lh-tight"
                                aria-current="true">
                                <div class="d-flex w-100 align-items-center justify-content-between">
                                    <strong class="mb-1">Confirm Sales</strong>
                                    <small>Wed</small>
                                </div>
                                <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and
                                    date.</div>
                            </a>
                            <a href="#" class="list-group-item list-group-item-action py-3 lh-tight">
                                <div class="d-flex w-100 align-items-center justify-content-between">
                                    <strong class="mb-1">Header for the items</strong>
                                    <small class="text-muted">Tues</small>
                                </div>
                                <div class="col-10 mb-1 small">Some placeholder content in a paragraph below the heading and
                                    date.</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
