<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SpotifyController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/spotify/login', [SpotifyController::class, 'login']);
Route::get('/callback', [SpotifyController::class, 'callback']);
Route::get('/spotify/tracks', [SpotifyController::class, 'getTracks']);
Route::post('/spotify/play', [SpotifyController::class, 'playTrack']);
Route::post('/spotify/refresh', [SpotifyController::class, 'refreshToken']);
// Route::get('/profile/{user:username}', [ProfileController::class, 'show'])->name('profile.user');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
