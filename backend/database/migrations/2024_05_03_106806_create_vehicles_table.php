<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vehicles', function (Blueprint $table) {
            $table->id();
            $table->string('make');
            $table->string('model');
            $table->year('year');
            $table->string('color')->nullable();
            $table->float('pricePerDay');
            $table->string('mileage');
            $table->string('plateNumber');
            $table->boolean('isAvailable')->default(true);
            $table->date('purchaseDate');
            $table->date('purchasePrice');
            $table->unsignedBigInteger("categoryId");
            $table->foreign("categoryId")->references("id")->on("categories")->onDelete("cascade");
            $table->unsignedBigInteger("fuelTypeId");
            $table->foreign("fuelTypeId")->references("id")->on("fuel_types")->onDelete("cascade");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicles');
    }
};
