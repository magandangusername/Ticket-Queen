<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\TicketUploadController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => 'auth'], function () {
    Route::get('/listing', function () {
        return view('listing');
    })->name('listing');
});

Route::get('/', function () {
    if (Auth::check()) {
        return redirect('listing');
    }
    return view('auth/login');
});

Route::get('/sales', function () {
    return view('sales');
});

Route::get('/testing', function () {
    return view('testing');
});

Route::get('/upload', function () {
    return view('upload');
});

Route::get('UploadETickets/{id}',[TicketUploadController::class, 'show'])->where('id', '[0-9]+');


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
