<?php

namespace App\Models;
use App\Models\Vehicle;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];
    public function vehicles(){
        return $this->hasMany(Vehicle::class,"categoryId");
    }
}
