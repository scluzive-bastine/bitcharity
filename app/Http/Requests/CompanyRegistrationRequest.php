<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CompanyRegistrationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'username' => 'required|string|max:255', //username of user to authenticate
            'name' => 'required|string|max:255|unique:companies', // Company business name
            'company_address' => 'required|string|max:255', // Company Address
            'phone' => 'required|string|max:20', // Company Phone
            'email' => 'required|string|email|max:255|unique:users', // email for company account
            'password' => 'required|string|min:6|confirmed', // Password
        ];
    }
}
