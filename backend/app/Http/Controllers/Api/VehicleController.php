<?php

namespace App\Http\Controllers\Api;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{

            $vehicles = Vehicle::all();

            $vehicles->each(function ($vehicle) {
                if ($vehicle->photo) {
                    $vehicle->photo = Storage::url($vehicle->photo);
                }
            });
            return response()->json([
               'status' => "success",
               'message' => "Successfully fetched",
                'data' => $vehicles
            ], 200);

          }catch(Throwable $th){

            return response()->json([
               'status' => "error",
               'message' => "Something went wrong"
            ], 500);
          }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        try {

            $validate = Validator::make($request->all(),
            [

                'make' =>'required|string',
                'model' =>'required|string',
                'year' =>['required', 'digits:4', 'integer', 'between:1900,2100'],
                'color' =>'string',
                'pricePerDay' =>'required|integer',
                'mileage'=>'required|string',
                "plateNumber"=>'required|string',
                "purchaseDate"=>"required|date",
                "purchasePrice"=>"required",
                'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
            ]);
            // return $request->all();
            if($validate ->fails()){
                return response()->json([
                    'status' => "fail",
                    'message' => $validate->errors()->first(),
                ], 401);
            }

            $data = $request->all();
            $data["photo"]=$request->file('photo')->store('vehicles','public');
            DB::table('vehicles')->insert($data);
            return response()->json([
                'status' => "success",
                'message' => "Successfully created"
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
               'status' => "error",
               'message' => $th->getMessage(),
            ], 500);

        }
    }

    public function show(string $id)
    {
        try {

            $vehicle = Vehicle::find($id);
            if (!$vehicle) {
                return response()->json([
                'status' => "fail",
                'message' => "vehicle not found"
                ], 404);
            }
            if ($vehicle->photo) {
                $vehicle->photo = Storage::url($vehicle->photo);
            }
            return response()->json([
               'status' => "success",
               'message' => "Successfully fetched",
                'data' => $vehicle,

            ], 200);

       } catch (\Throwable $th) {

        return response()->json([
           'status' => "error",
           'message' => "Something went wrong"
        ], 500);
       }
    }


    public function update(Request $request, string $id)
    {
        try {

            $vehicle = Vehicle::find($id);
            if (!$vehicle) {
                return response()->json([
                   'status' => "fail",
                   'message' => "vehicle not found"
                ], 404);
            }

            $validate = Validator::make($request->all(),
            [
                'make' =>'string',
                'model' =>'string',
                'year' =>[ 'digits:4', 'integer', 'between:1900,2100'],
                'color' =>'string',
                'pricePerDay' =>'integer',
                'mileage'=>'string',
                "plateNumber"=>'string',
                "purchaseDate"=>"date",
                "purchasePrice"=>"date",
            ]);

            if($validate ->fails()){
                return response()->json([
                    'status' => "fail",
                    'message' => $validate->errors()->first()
                ], 401);
            }

            $data = $request->all();
            Vehicle::where("id",$id)->update($data);

            return response()->json([
                'status' => "success",
                'message' => "Successfully updated"
                ], 200);

        } catch (\Throwable $th) {

            return response()->json([
               'status' => "error",
               'message' => "Something went wrong"
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $vehicle = Vehicle::findOrFail($id);
            if (!$vehicle) {
                return response()->json([
                'status' => "fail",
                'message' => "vehicle not found"
                ], 404);
            }

            $vehicle->delete();
            return response()->json([
            'status' => "success",
            'message' => "Successfully deleted"
            ], 200);

       } catch (\Throwable $th) {
            return response()->json([
            'status' => "error",
            'message' => "Something went wrong"
            ], 500);
       }

    }
}
