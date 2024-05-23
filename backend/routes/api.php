<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\UserController;
use App\Http\Controllers\Api\RentalBookController;
use App\Http\Controllers\Api\VehicleController;
use App\Http\Controllers\Api\CategoryController;
use App\Http\Controllers\Api\FuelTypeController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/users', [UserController::class,"index"]);


Route::post('/auth/register', [UserController::class, 'createUser']);
Route::post('/auth/login', [UserController::class, 'loginUser']);
// Route::apiResource('users', [UserController::class]);
// Route::group([

//     'middleware' => 'api',
//     'prefix' => 'auth'

// ], function ($router) {

//     Route::post('login', 'AuthController@login');
//     Route::post('logout', 'AuthController@logout');
//     Route::post('refresh', 'AuthController@refresh');
//     Route::post('me', 'AuthController@me');

// });
// Route::post('/auth/logout', [UserController::class, 'logoutUser']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get("/rentalBooks",[RentalBookController::class, 'index']);
    Route::post("/rentalBooks",[RentalBookController::class, 'store']);
    Route::get("/rentalBooks/{id}",[RentalBookController::class, 'show']);
    Route::patch("/rentalBooks/{id}",[RentalBookController::class, 'update'])->middleware("admin");;
    Route::delete("/rentalBooks/{id}",[RentalBookController::class, 'destroy'])->middleware("admin");
});

Route::prefix('vehicles')->group(function () {
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::post('/categories', [CategoryController::class, "create"])->middleware("admin");;
    Route::get('/categories/{id}', [CategoryController::class, "show"]);
    Route::patch('/categories/{id}', [CategoryController::class, "update"])->middleware("admin");;
    Route::delete('/categories/{id}', [CategoryController::class, "destroy"])->middleware("admin");;

    Route::get('/fuelTypes', [FuelTypeController::class, 'index']);
    Route::post('/fuelTypes', [FuelTypeController::class, "create"])->middleware("admin");;
    Route::get('/fuelTypes/{id}', [FuelTypeController::class, "show"]);
    Route::patch('/fuelTypes/{id}', [FuelTypeController::class, "update"])->middleware("admin");;
    Route::delete('/fuelTypes/{id}', [FuelTypeController::class, "destroy"])->middleware("admin");;

    Route::get('/', [VehicleController::class, 'index']);
    Route::post('/', [VehicleController::class, "create"])->middleware("admin");;
    Route::get('/{id}', [VehicleController::class, "show"]);
    Route::patch('/{id}', [VehicleController::class, "update"])->middleware("admin");;
    Route::delete('/{id}', [VehicleController::class, "destroy"])->middleware("admin");;



});
