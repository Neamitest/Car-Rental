<?php

namespace App\Models;
use App\Models\Category;
use App\Models\FuelType;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vehicle extends Model
{
    use HasFactory;
    protected $fillable = [
        "make","model","year","color","pricePerDay",
        "mileage","plateNumber","isAvailable","purchaseDate",
        "purchaseDate","purchasePrice","categoryId","fuelTypeId,image"];
    public function category(){
        return $this->belongsTo(Category::class);
    }
    public function fuelType(){
        return $this->belongsTo(FuelType::class);
    }
}
