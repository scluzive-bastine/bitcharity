<?php
namespace App\Services;
use DB;
use App\Models\User;
use App\Models\VerifiedPhone;
use App\Models\Company;
use App\Services\MailService;
use App\Models\OneTimeCode;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Amir\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\UpdatePhoneRequest;
use App\Http\Requests\RegistrationRequest;
use App\Http\Requests\CompanyRegistrationRequest;

class Authentication
{
    // Process of basic user registeration
    // 1. Get role id of 'User' role from 'roles' table.
    // 2. Hash request password
    // 3. Generate remember_token
    // 4 Create a DB Transaction reverse all if any db transaction fails
    // 5. Generate onetime code for user.
    // 6. Send verification email to user.
    public static function registerAsUser(RegistrationRequest $request){
        $role_id = Role::where('name', 'User')->pluck('id')->first();
        $request['password']=Hash::make($request['password']);
        $request['remember_token'] = Str::random(10);
        $response = DB::transaction(function () use ($request, $role_id) {
            $user = User::create($request->toArray());
            $user->role_id = $role_id;
            $token = $user->createToken('User Registration Authentication')->accessToken;
            $c = OneTimeCode::generate('EMAIL VERIFICATION',1, $user->id, 6);
            $mail = MailService::mailOneTimeCode($c->code, $user->email, 1);
            $response = [
                            'token' => $token,
                            'user' => $user,
                            'message'=> $user->username .' has been authroized',
                            'status' => '200',
                            'mail'=> $mail,
                            'onetime'=> $c
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

    public static function confirmEmail(Request $request){
        $user_id = User::keyValueExisits('email', $request->email);
        if($user_id){
            $user_id = $user_id->id;
            $code = OneTimeCode::where('type', 'EMAIL VERIFICATION')
            ->where('user_id', $user_id)
            ->where('code', $request->code)
            // ->where('status', 0)
            ->get()->first();
            if($code){
                $code->status = 1;
                $code->save();
                return ['status' => '200', 'message' => 'Email verified'];
            }
            return ['status' => '400', 'message' => 'Email unverified'];
        }
        return ['status' => '400', 'message' => 'Email not registered'];
    }
    public static function confirmPhone(Request $request){
        $user = User::keyValueExisits('email', $request->email);
        if($user){
            $code = OneTimeCode::where('type', 'NEW PHONE NUMBER VERIFICATION')
            ->where('user_id', $user->id)
            ->where('code', $request->code)
            ->get()->first();
            if($code){
                $code->status = 1;
                $code->save();
                $phone = VerifiedPhone::unverified($user->id);
                if($phone){
                    $phone->status = 1;
                    $phone->active = 1;
                    $phone->save();
                }
                return ['status' => '400', 'message' => 'Phone unverified'];
            }
            return ['status' => '400', 'message' => 'Phone unverified'];
        }
        return ['status' => '400', 'message' => 'Uknown user'];
    }
    public static function addPhone(UpdatePhoneRequest $request){
        $user = User::keyValueExisits('email', $request->email);
        if($user){
            if($phone  = VerifiedPhone::unverified($user->id)){
                $phone->delete();
            }
            $response = DB::transaction(function () use ($request, $user) {
                $unverified = VerifiedPhone::create([
                    'info'=> $request->info,
                    'user_id'=> $user->id
                ]);
                $c = OneTimeCode::generate('NEW PHONE NUMBER VERIFICATION',1, $user->id, 6);
                $mail = MailService::mailOneTimeCode($c->code, $user->email, 1);
                $response = [
                                'user' => $user,
                                'message'=> 'A  code was sent to '. $request->info . '. Phone number awaiting verification',
                                'status' => '200',
                                'mail'=> $mail,
                                'onetime'=> $c
                            ];
                return $response;
            });
        }
        return ['status' => '400', 'message' => 'Uknown user'];
    }
}

