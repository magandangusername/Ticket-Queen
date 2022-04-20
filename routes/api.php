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
Route::get('ticket_types', [ListingController::class, 'ticket_types']);
Route::post('tickets/update', [ListingController::class, 'update']);
Route::post('tickets/clone/create', [ListingController::class, 'clone']);
Route::post('tickets/edit/update', [ListingController::class, 'ticketupdate']);
Route::post('tickets/destroyselect', [ListingController::class, 'deletedSelected']);
Route::post('tickets/destroy', [ListingController::class, 'destroy']);
Route::post('tickets/create', [ListingController::class, 'createticket']);
Route::post('tickets/publishselect', [ListingController::class, 'publishselect']);
Route::post('tickets/unpublishselect', [ListingController::class, 'unpublishselect']);
Route::post('tickets/topaperselect', [ListingController::class, 'topaperselect']);
Route::post('tickets/toeselect', [ListingController::class, 'toeselect']);

Route::post('concerts/create', [ListingController::class, 'createconcert']);

Route::get('restrictions',[ListingController::class, 'restrictions']);
Route::get('listing_notes',[ListingController::class, 'listing_notes']);
Route::get('listing_notes/{id}',[ListingController::class, 'listing_notes_fetch'])->where('id', '[0-9]+');
Route::get('restrictions/{id}',[ListingController::class, 'restrictions_fetch'])->where('id', '[0-9]+');
