<?php

namespace App\Http\Controllers\Auth;
use App\Models\User;
use Illuminate\Http\Request;
use App\Services\Authentication;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\UpdatePhoneRequest;
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
    public function verifyEmail (Request $request) {
        if(isset($request->email) && isset($request->code)){
            $response = Authentication::confirmEmail($request);
            return response($response, 200);
        }
        return response(['status'=>'400', 'message'=>'invalid request parameters'], 400);
    }
    public function verifyPhone(Request $request){
        if(isset($request->email) && isset($request->phone)
                && isset($request->phone)){
                    $response = Authentication::confirmPhone($request);
                }
                return [
                    'status'=> '400',
                    'message'=>'Invalid request parameters'
                ];
    }
    public function addPhone(Request $request){
        if(isset($request->email) && isset($request->phone)
                && isset($request->phone)){
                    $response = Authentication::addPhone($request);
                }
                return [
                    'status'=> '400',
                    'message'=>'Invalid request parameters'
                ];
    }
    public function logout (Request $request) {
        $token = $request->user()->token();
        $token->revoke();
        $response = ['message' => 'You have been successfully logged out!'];
        return response($response, 200);
    }
    public function changePhoneNumber(UpdatePhoneRequest $request){

    }
}
