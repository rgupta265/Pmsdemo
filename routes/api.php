<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

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

// Route::middleware('auth:api')->get('/me', function (Request $request) {
//     return $request->user();
// });

Route::get('/roles', [App\Http\Controllers\PermissionController::class,'Permission']);//create dummy data
Route::get('/constants', [App\Http\Controllers\ConstantsController::class, 'index']);//get roles and all permission data to checked user permissions

Route::post('register',[App\Http\Controllers\AuthController::class, 'register']);
Route::post('login',[App\Http\Controllers\AuthController::class, 'login']);
Route::group(['middleware'=>'jwt.verify'],function(){
    Route::get('user',[App\Http\Controllers\AuthController::class, 'getUser']);
    // Route::resource('todos','TodoController');
    Route::get('me', [App\Http\Controllers\UsersController::class, 'me']);

});
