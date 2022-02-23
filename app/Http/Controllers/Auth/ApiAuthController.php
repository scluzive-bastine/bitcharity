<?php

namespace App\Http\Controllers\Auth;
use App\Models\User;
use Illuminate\Http\Request;
use App\Services\Authentication;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use App\Http\Requests\CompanyRegistrationRequest;

class ApiAuthController extends Controller
{
    public function registerUser(RegistrationRequest $request) {
        if(!User::usernameExisits($request->username)){
            $response = Authentication::registerAsUser($request);
            return response($response, 200);
        }
        return response([
            'status'=>'400',
            'message'=>'Username already taken'
        ], 200);
    }
    public function registerCompany(CompanyRegistrationRequest $request) {
        if(!User::usernameExisits($request->username)){
            $response = Authentication::registerAsCompany($request);
            return response($response, 200);
        }
        return response([
            'status'=>'400',
            'message'=>'Username already taken'
        ], 200);
    }
    public function login (LoginRequest $request) {
        $response = Authentication::authenticate($request);
        if($response['status'] == '200'){
            return response($response, 200);
        }
        return response($response, 400);
    }
    public function logout (Request $request) {
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message' => 'You have been successfully logged out!'];
        return response($response, 200);
    }
}
