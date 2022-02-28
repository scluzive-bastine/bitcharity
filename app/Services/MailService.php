<?php
namespace App\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\OneTimeCodeMailable;
class MailService
{
    public static function mailOneTimeCode($code, $email, $expiry){
        $res= false;
        try {
            Mail::to($email)
            ->send(new OneTimeCodeMailable($code, $expiry));
            $res = true;
        } catch (\Throwable $th) {
            // Queue to be sent late..
            // $log = 'Issues in sending email.'.$th->getMessage();
            $res = false;
        }
        return $res;
    }
}

