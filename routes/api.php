<?php

use Illuminate\Http\Request;

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

Route::get('/users/',[
	'uses' => 'UsersController@index'
]);
Route::get('/users/{country}',[
	'uses' => 'UsersController@show_by_country'
]);
Route::get('/user/{id}',[
	'uses' => 'UsersController@show'
]);
Route::get('/countries',[
	'uses' => 'UsersController@get_all_countries'
]);
