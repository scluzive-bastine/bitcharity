<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use App\Models\User;
class Authenticate extends Middleware
{
    /**
     * Get the path the user should be redirected to when they are not authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    protected function redirectTo($request)
    {
        if (! $request->expectsJson()) {
            return route('login');
        }
        // $token = substr($request->header('Authorization'), 7);
        $user = User::keyValueExisits('email', $request->email);
        if(!$user){
            return response()->json(['type'=>'SESSION_EXPIRE'], 401);
        }
        return $next($request->merge(["user_id"=>$user->id]));
    }
}
