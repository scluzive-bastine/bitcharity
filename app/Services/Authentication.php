<?php
namespace App\Services;
use DB;
use App\Models\User;
use App\Models\Company;
use App\Services\MailService;
use App\Models\OneTimeCode;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Amir\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegistrationRequest;
use App\Http\Requests\CompanyRegistrationRequest;

class Authentication
{
    public static function registerAsUser(RegistrationRequest $request){
        $role_id = Role::where('name', 'User')->pluck('id')->first();
        $request['password']=Hash::make($request['password']);
        $request['remember_token'] = Str::random(10);
        return DB::transaction(function () use ($request, $role_id) {
            $user = User::create($request->toArray());
            $c = OneTimeCode::generate('EMAIL VERIFICATION',1, $user->id, 6);
            $mail = MailService::mailOneTimeCode($c->code, $user->email, 1);
            $user->role_id = $role_id;
            $token = $user->createToken('User Registration Authentication')->accessToken;
            $response = [
                            'token' => $token,
                            'user' => $user,
                            'message'=> $user->username .' has been authroized',
                            'status' => '200',
                            'mail'=> $mail
                        ];
            return $response;
        });
    }
    // Accepts a Company registration type of request
    public static function registerAsCompany(CompanyRegistrationRequest $request){
        return DB::transaction(function () use ($request) {
            $_userRequest = new RegistrationRequest();
            $_userRequest->setMethod('POST');
            $_userRequest->request->add([
                                            'username' => $request->username,
                                            'email' => $request->email,
                                            'password' => $request->password,
                                            'password_confirmation' => $request->password_confirmation
                                        ]);
            $response = Authentication::registerAsUser($_userRequest);
            $user = $response['user'];
            $company = CompanyService::register($request, $user->id);
            $c = OneTimeCode::generate('EMAIL VERIFICATION',1, $user->id, 6);
            $mail = MailService::mailOneTimeCode($c->code, $user->email, 1);
            $response = [
                            'token' => $response['token'],
                            'user' => $user,
                            'company' => $company,
                            'message'=> $company->name . ' was successfully registered.'. $user->username .' has been authroized',
                            'status' => '200',
                            'mail' => $mail
                        ];
            return $response;
        });
    }
    public static function authenticate(LoginRequest $request){
        $user = User::keyValueExisits('email', $request->email);
        if ($user) {
            if (Hash::check($request->password, $user->password)) {
                $token = $user->createToken('Login Authentication Grant Client')->accessToken;
                $response = [
                    'token' => $token,
                    'user' => $user,
                    'message'=> $user->username .' has been authroized',
                    'status' => '200'
                ];
                return $response;
            } else {
                $response = [
                    'user' => $user,
                    'message'=>"Unauthorized. Email/Password is incorrect.",
                    'status' => '400'
                ];
                return $response;
            }
        } else {
            $response = [
                'message'=>"Unauthorized. Email/Password is incorrect.",
                'status' => '400'
            ];
            return $response;
        }
    }
}

