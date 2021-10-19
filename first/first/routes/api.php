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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/expenses', [App\Http\Controllers\ExpenseController::class, 'index'])->name('expenses.all');
Route::post('/expenses', [App\Http\Controllers\ExpenseController::class, 'store'])->name('expenses.store');
Route::get('/expenses/{id}', [App\Http\Controllers\ExpenseController::class, 'show'])->name('expenses.show');
Route::post('/expenses/{id}', [App\Http\Controllers\ExpenseController::class, 'update'])->name('expenses.update');
Route::delete('/expenses/{id}', [App\Http\Controllers\ExpenseController::class, 'destroy'])->name('expenses.destroy');
