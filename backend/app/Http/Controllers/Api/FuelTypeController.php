<?php

namespace App\Http\Controllers\Api;
use Throwable;
use App\Models\FuelType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class FuelTypeController extends Controller
{
    public function index()
    {
       try{

         $fuelType = FuelType::all();
         return response()->json([
            'status' => "success",
            'message' => "Successfully fetched",
             'data' => $fuelType
         ], 200);

       }catch(Throwable $th){
         return response()->json([
            'status' => "error",
            'message' => "Something went wrong",
         ], 500);
       }
    }


    public function create(Request $request)
    {
        try {

            $validate = Validator::make($request->all(),
            [
                'name' => 'required|unique:fuel_types,name',
            ]);

            if($validate ->fails()){
                return response()->json([
                    'status' => "fail",
                    'message' => $validate->errors()->first(),
                ], 401);
            }

            $data = $request->all();
            FuelType::create($data);

            return response()->json([
                'status' => "success",
                'message' => "Successfully created"
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
               'status' => "error",
               'message' => "Something went wrong",
            ], 500);

        }
    }

    public function show(string $id)
    {

       try {

            $fuelType = FuelType::find($id);
            if (!$fuelType) {
                return response()->json([
                'status' => "fail",
                'message' => "fuelType not found"
                ], 404);
            }
            return response()->json([
               'status' => "success",
               'message' => "Successfully fetched",
                'data' => $fuelType
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

            $fuelType = FuelType::find($id);
            if (!$fuelType) {
                return response()->json([
                   'status' => "fail",
                   'message' => "fuel type not found"
                ], 404);
            }

            $validate = Validator::make($request->all(),
            [
                'name' => 'required|unique:Fuel_types,name',
            ]);

            if($validate ->fails()){
                return response()->json([
                    'status' => "fail",
                    'message' => $validate->errors()->first()
                ], 401);
            }

            $data = $request->all();
            FuelType::where("id",$id)->update($data);

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


    public function destroy(string $id)
    {
       try {
            $fuelType = FuelType::find($id);
            if (!$fuelType) {
                return response()->json([
                'status' => "fail",
                'message' => "FuelType not found"
                ], 404);
            }

            $fuelType->delete();
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
