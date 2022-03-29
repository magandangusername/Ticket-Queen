<?php

use App\Http\Controllers\ListingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('concerts', [ListingController::class, 'concerts']);
Route::get('tickets', [ListingController::class, 'tickets']);
Route::post('tickets/update', [ListingController::class, 'update']);
Route::get('restrictions',[ListingController::class, 'restrictions']);
Route::get('listing_notes',[ListingController::class, 'listing_notes']);
