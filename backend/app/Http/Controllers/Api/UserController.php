<?php

namespace App\Http\Controllers\Api;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Create User
     * @param Request $request
     * @return User
     */

    public function index(){
        $users = User::all();
        return response()->json([
           'status' =>'success',
           'message' => 'User List',
            'data' => $users
        ], 200);
    }
    public function createUser(Request $request)
    {
        try {
            //Validated
            $validateUser = Validator::make($request->all(),
            [
                'email' => 'required|email|unique:users,email',
                'password' => 'required',
                "phoneNumber" => 'required',
                "dateOfBirth" => 'required',
                "driverLicense" => 'required',
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => 'fail',
                    'message' => $validateUser->errors()->first()
                ], 401);
            }

            $user = User::create([
                'firstName' => $request->firstName,
                'lastName' => $request->lastName,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                "address"=>$request->address,
                "phoneNumber"=>$request->phoneNumber,
                "gender"=>$request->gender,
                "dateOfBirth" => $request->dateOfBirth,
                "driverLicense"=>$request->driverLicense,
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'User Created Successfully',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);

        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => $th->getMessage()
            ], 500);
        }
    }
    public function show($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);

        $validatedData = $request->validate([
            'name' => 'sometimes|string|max:255',
            'email' => 'sometimes|string|email|max:255|unique:users,email,' . $user->id,
            'password' => 'sometimes|string|min:8',
        ]);

        $user->update($validatedData);

        return response()->json($user);
    }
    /**
     * Login The User
     * @param Request $request
     * @return User
     */
    public function loginUser(Request $request)
    {
        try {
            $validateUser = Validator::make($request->all(),
            [
                'email' => 'required|email',
                'password' => 'required'
            ]);

            if($validateUser->fails()){
                return response()->json([
                    'status' => 'fail',
                    'message' => 'validation error',
                    'message' => $validateUser->errors()->first()
                ], 401);
            }

            if(!Auth::attempt($request->only(['email', 'password']))){
                return response()->json([
                    'status' => 'fail',
                    'message' => 'Email & Password does not match with our record.',
                ], 401);
            }

            $user = User::where('email', $request->email)->first();

            return response()->json([
                'status' =>"success",
                'message' => 'User Logged In Successfully',
                'token' => $user->createToken("API TOKEN")->plainTextToken
            ], 200);


        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => $th->getMessage()
            ], 500);
        }
    }
    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return response()->json(null, 204);
    }
}
