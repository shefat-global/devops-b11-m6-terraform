<?php

use App\Http\Controllers\Backend\AboutPageController;
use App\Http\Controllers\Backend\BlogController;
use App\Http\Controllers\Backend\GatewayController;
use App\Http\Controllers\Backend\ServiceController;
use App\Http\Controllers\Backend\SettingController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\SliderController;
use App\Http\Controllers\Backend\TestimonialController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


// Slider api
Route::get('/sliders', [SliderController::class, 'ApiAllSlider']);

// Service api
Route::get('/services', [ServiceController::class, 'ApiAllServices']);
Route::get('/service/{slug}', [ServiceController::class, 'ApiGetServicesBySlug']);

/// Gateway one api //
 ///  one api //
 Route::get('/gatewayone',[GatewayController::class, 'ApiGatewayOne']);
 /// Gateway Two api //
 ///  Two api //
 Route::get('/gatewaytwo',[GatewayController::class, 'ApiGatewayTwo']);

// Testimonial api
Route::get('/gettestimonial', [TestimonialController::class, 'ApiGetTestimonial']);

///  Blog Category api //
Route::get('/blogcat',[BlogController::class, 'ApiBlogCat']);

///  Blog Post api //
Route::get('/allblog',[BlogController::class, 'ApiAllBlog']);
Route::get('/allblog/{slug}',[BlogController::class, 'ApiAllBlogSlug']);
Route::get('/category/{category_id}/blogs',[BlogController::class, 'getBlogsByCategory']);

///  Sitesetting api //
Route::get('/sitesetting',[SettingController::class, 'ApiSiteSetting']);

///  Aboutus api //
Route::get('/aboutpage',[AboutPageController::class, 'ApiAboutPage']);

///  Add Contact api //
Route::post('/contact',[AboutPageController::class, 'ContactSubmit']);
