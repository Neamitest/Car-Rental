<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class RentalBook extends Model
{
    use HasFactory;
    protected $fillable = ["startDate,endDate,price,initialNotes,userId,vehicleId"];
    public function user()
    {
        return $this->belongsTo(User::class,"userId");
    }
    public function getUser(){
        return $this->user;
    }
}
