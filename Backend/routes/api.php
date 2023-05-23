<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\RentController;

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


//! Public Routes
    // signup
    Route::post('/signup', [UserController::class, 'signup']);
    // login
    Route::post('/login', [UserController::class, 'login']);
    // list of cars
    Route::get('/cars', [CarController::class, 'index']);
    // show a car
    Route::get('/cars/{id}', [CarController::class, 'show']);
    
    //! admin =====================================================
    //? users
    // list of users
    Route::get('/users', [UserController::class, 'index']);
    
    // delete a user
    Route::delete('/users/{id}', [UserController::class, 'destroy']);

    //? cars
    // add a car
    Route::post('/cars',[CarController::class,'store']);

    // update a car
    Route::put('/cars/{id}', [CarController::class, 'update']);

    // delete car
    Route::delete('/cars/{id}', [CarController::class, 'destroy']);


//! Protected Routes
Route::group(['middleware' => ['auth:sanctum']], function () {


    //rents
    Route::resource('/rents', RentController::class);

    // list of rents for a user
    Route::get('/my-rents/{id}', [RentController::class, 'myRents']);

    // edit a rent
    Route::get('/my-rents/edit/{id}', [RentController::class, 'editRent']);

    // update the user profile
    Route::put('/users/{id}', [UserController::class, 'update']);


    //! Dashbaord =============================================

    // // list of users
    // Route::get('/users', [UserController::class, 'index']);

    // delete a user
    //Route::delete('/users/{id}', [UserController::class, 'destroy']);
    
    // cars 
    // Route::post('/cars', [CarController::class, 'store']);
    // Route::put('/cars/{id}', [CarController::class, 'update']);
    // Route::delete('/cars/{id}', [CarController::class, 'destroy']);
    
    // logout 
    Route::post('/logout', [UserController::class, 'logout']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
