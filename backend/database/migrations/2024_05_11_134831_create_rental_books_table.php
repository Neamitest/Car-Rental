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
        Schema::create('rental_books', function (Blueprint $table) {
            $table->id();
            $table->date("startDate");
            $table->date("endDate");
            $table->float("price");
            $table->text("initialNotes");
            $table->unsignedBigInteger("userId");
            $table->foreign("userId")->references("id")->on("users")->onDelete("cascade");
            $table->unsignedBigInteger("vehicleId");
            $table->foreign("vehicleId")->references("id")->on("vehicles")->onDelete("cascade");

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rental_book');
    }
};
