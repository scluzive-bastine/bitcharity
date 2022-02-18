<?php
namespace App\Services;
use App\Models\User;
use App\Models\Company;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Amir\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegistrationRequest;
use App\Http\Requests\CompanyRegistrationRequest;

class CompanyService
{
    public static function register(CompanyRegistrationRequest $request, $user_id){
        $company = new Company();
        $company->name = $request->name;
        $company->user_id = $user_id;
        $company->address = $request->company_address;
        $company->email = $request->email;
        $company->phone = $request->phone;
        $company->logo = isset($request->logo) ? $request->logo : '';
        $company->save();
        return $company;
    }
}

