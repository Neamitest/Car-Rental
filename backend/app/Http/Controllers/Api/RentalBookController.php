<?php


namespace App\Http\Controllers\Api;
use Throwable;
use App\Models\User;
use App\Models\Vehicle;
use App\Models\RentalBook;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class RentalBookController extends Controller
{
    public function index()
    {
       try{
        // $rentalBooks = RentalBook::find(1);
        $rentalBooks = RentalBook::with(['user' => function ($query) {
            $query->select('id', 'firstName',"lastName");
        }])->get();
              
         return response()->json([
            'status' => "success",
            'message' => "Successfully fetched",
            'data' => $rentalBooks,
         ], 200);

       }catch(Throwable $th){

         return response()->json([
            'status' => "error",
            'message' =>$th->getMessage(),
            // 'message' => "Something went wrong"
         ], 500);
       }
    }
    public function store(Request $request)
    {
        try {

            $validate = Validator::make($request->all(),
            [
                "startDate"=>"required",
                "endDate"=>"required",
                "startDate"=>"required",
                "price"=>"required",
               'initialNotes' =>'required',
                'vehicleId' =>'required',
                'userId' =>'required',
            ]);

            if($validate ->fails()){
                return response()->json([
                    'status' => "fail",
                    'message' => $validate->errors()->first(),
                ], 401);
            }
            $vehicle = Vehicle::find($request->vehicleId);
            if (!$vehicle) {
                return response()->json([
                'status' => "fail",
                'message' => "vehicle not found"
                ], 404);
            }
            $user = User::find($request->userId);
            if (!$user) {
                return response()->json([
                'status' => "fail",
                'message' => "user not found"
                ], 404);
            }
            $data = $request->all();
            DB::table('rental_books')->insert($data);

            return response()->json([
                'status' => "success",
                'message' => "Successfully created"
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
               'status' => "error",
               'message' =>$th->getMessage(),
            //    'message' => "Something went wrong"
            ], 500);

        }
    }

    public function show(string $id)
    {
       try {

            $RentalBook = RentalBook::findOrFail($id);
            if (!$RentalBook) {
                return response()->json([
                'status' => "fail",
                'message' => "Rental Book not found"
                ], 404);
            }

            return response()->json([
               'status' => "success",
               'message' => "Successfully fetched",
                'data' => $RentalBook
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

            $RentalBook = RentalBook::find($id);
            if (!$RentalBook) {
                return response()->json([
                   'status' => "fail",
                   'message' => "Rental Book not found"
                ], 404);
            }

            $validate = Validator::make($request->all(),
            [
                'name' => 'required|unique:categories,name',
            ]);

            if($validate ->fails()){
                return response()->json([
                    'status' => "fail",
                    'message' => $validate->errors()->first()
                ], 401);
            }

            $data = $request->all();
            RentalBook::where("id",$id)->update($data);

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
            $RentalBook = RentalBook::find($id);
            if (!$RentalBook) {
                return response()->json([
                'status' => "fail",
                'message' => "Rental Book not found"
                ], 404);
            }

            $category->delete();
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

