<?php
namespace App\Services;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\OneTimeCodeMailable;
class MailService
{
    public static function mailOneTimeCode($code, $email, $expiry){
        $res= '';
        try {
            Mail::to($email)
            ->send(new OneTimeCodeMailable($code, $expiry));
            $res = 'Mail Sent';
        } catch (\Throwable $th) {
            // Queue to be sent late..
            $res = 'Issues in sending email.'.$th->getMessage();
        }
        return $res;
    }
}

