<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
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

// Eg {domain}/api/{route}
Route::group(['middleware' => ['cors', 'json.response']], function () {
    Route::post('/login', 'App\Http\Controllers\Auth\ApiAuthController@login')->name('login.api');
    Route::post('/register','App\Http\Controllers\Auth\ApiAuthController@registerUser')->name('register.api');
    Route::post('/register-company','App\Http\Controllers\Auth\ApiAuthController@registerCompany')->name('registerCompany.api');
    Route::post('verify/email', 'App\Http\Controllers\Auth\ApiAuthController@verifyEmail')->name('email.verify.api');
    Route::post('add/phone', 'App\Http\Controllers\Auth\ApiAuthController@addPhone')->name('phone.add.api');
    Route::post('verify/phone', 'App\Http\Controllers\Auth\ApiAuthController@verifyPhone')->name('phone.verify.api');

    Route::middleware('auth:api')->group(function () {
        // our routes to be protected will go in here
        Route::post('/add-phone', 'Auth\ApiAuthController@logout')->name('logout.api');
        Route::post('/logout', 'Auth\ApiAuthController@logout')->name('logout.api');
    });


    // Route::group([
    //     'middleware' => 'auth.role',
    //     'role' => ['admin', 'customer'],
    // ],function (){
    //     Route::get('/home', 'HomeController@index')->name('home');
    //     Route::get('/product', 'ProductController@index');
    // });
});
