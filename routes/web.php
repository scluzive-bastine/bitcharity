<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


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

Route::get('/', function () {
    return Inertia::render('Index');
});
Route::get('/campaigns', function () {
    return Inertia::render('OpenCampaigns');
});
Route::get('/campaign/unique', function () {
    return Inertia::render('Campaign');
});
Route::get('/create/campaign', function () {
    return Inertia::render('CreateCampaign');
});

Route::get('/requests', function () {
    return Inertia::render('Requests');
});
