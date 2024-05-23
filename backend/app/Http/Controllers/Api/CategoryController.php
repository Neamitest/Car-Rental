<?php

namespace App\Http\Controllers\Api;
use Throwable;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CategoryController extends Controller
{

    public function index()
    {
       try{
        $categories = Category::all();
         return response()->json([
            'status' => "success",
            'message' => "Successfully fetched",
            'data' => $categories,
         ], 200);

       }catch(Throwable $th){

         return response()->json([
            'status' => "error",
            // 'message' =>$th->getMessage(),
            'message' => "Something went wrong"
         ], 500);
       }
    }
    public function create(Request $request)
    {
        try {

            $validate = Validator::make($request->all(),
            [
                'name' => 'required|unique:categories,name',
            ]);

            if($validate ->fails()){
                return response()->json([
                    'status' => "fail",
                    'message' => $validate->errors()->first(),
                ], 401);
            }

            $data = $request->all();
            Category::create($data);

            return response()->json([
                'status' => "success",
                'message' => "Successfully created"
            ], 201);
        } catch (\Throwable $th) {
            return response()->json([
               'status' => "error",
               'message' => "Something went wrong"
            ], 500);

        }
    }

    public function show(string $id)
    {
       try {

            $category = Category::find($id);
            if (!$category) {
                return response()->json([
                'status' => "fail",
                'message' => "Category not found"
                ], 404);
            }
            return response()->json([
               'status' => "success",
               'message' => "Successfully fetched",
                'data' => $category
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

            $category = Category::find($id);
            if (!$category) {
                return response()->json([
                   'status' => "fail",
                   'message' => "Category not found"
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
            Category::where("id",$id)->update($data);

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
            $category = Category::find($id);
            if (!$category) {
                return response()->json([
                'status' => "fail",
                'message' => "Category not found"
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
