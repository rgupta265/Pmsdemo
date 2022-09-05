<?php

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

// Route::middleware('auth:api')->get('/me', function (Request $request) {
//     return $request->user();
// });

Route::get('/dummy-data', [App\Http\Controllers\PermissionController::class,'Permission']);//create dummy data
Route::get('/constants', [App\Http\Controllers\ConstantsController::class, 'index']);//get roles and all permission data to checked user permissions

Route::get('/invite-token/{token}', [App\Http\Controllers\UserInvitationController::class,'getUserData']);
Route::post('register',[App\Http\Controllers\AuthController::class, 'register']);
Route::post('login',[App\Http\Controllers\AuthController::class, 'login']);
Route::get('webinfo',[App\Http\Controllers\WebsiteMasterInfo::class, 'getWebinfo']);
Route::group(['middleware'=>'jwt.verify'],function(){

    Route::get('user',[App\Http\Controllers\AuthController::class, 'getUser']);
    Route::get('me', [App\Http\Controllers\UsersController::class, 'me']);
    Route::post('changePassword', [App\Http\Controllers\UsersController::class, 'changePassword']);
    // Roles start
    Route::resource('roles', RoleController::class);
    // Roles End
    Route::resource('permission', PermissionController::class);
    Route::resource('pmsattribute', PmsAttributeController::class);
    Route::get('getAllPermission', [App\Http\Controllers\PermissionController::class, 'getAllPermissions']);
    Route::get('getUserRolePermission',[App\Http\Controllers\UsersController::class,'getUserHasRolePermission']);
    Route::resource('invite', UserInvitationController::class);
    Route::resource('userdetail', UserdetailController::class);

    Route::get('notification', [App\Http\Controllers\NotificationController::class, 'getAllNotification']);
    Route::get('getInviteRoles', [App\Http\Controllers\InvitatioinHierarchyController::class, 'getInviteRoleId']);
    Route::get('getActivity', [App\Http\Controllers\DashboardController::class, 'getLoggedInUserActivity']);
    Route::resource('userProfile', UserdetailController::class);
    Route::get('getJoinedUser', [App\Http\Controllers\PmsReportController::class, 'getAllJoinedUser']);
    Route::get('getUserData/{code}', [App\Http\Controllers\PmsReportController::class, 'getUserDetailByCode']);
    Route::get('pms', [App\Http\Controllers\PmsReportController::class,'getAllPmsAttribute']);
    Route::post('new-report', [App\Http\Controllers\PmsReportController::class,'CreateNewReport']);
    Route::get('getReportList', [App\Http\Controllers\PmsReportController::class,'getAllReportListByUserId']);
    Route::get('getReportInfo/{code}', [App\Http\Controllers\UniversalApi\GettersUniversalApiController::class,'getAllReportDetailsByReportCode']);
    Route::get('get-my-progress-report', [App\Http\Controllers\UniversalApi\GettersUniversalApiController::class,'getMyProgressReport']);
});
