<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Utils\RandomStringGenerator;
use App\Utils\DateTime;
use Carbon\Carbon;

class OneTimeCode extends Model
{
    use HasFactory;
    protected $fillable = [
        'type', 'code','expiry', 'user_id', 'status', 'active'
    ];

    public static function generate($type, $expiry, $user_id, $length = 6){
        if($_existing = OneTimeCode::exists($type, $user_id)){
            return $_existing;
        }
        $generator = new RandomStringGenerator;
        // Set token length.
        $tokenLength = $length;
        // Call method to generate random string.
        $code = $generator->generate($tokenLength);
        return OneTimeCode::create([
            'type'=> $type,
            'code'=> $code,
            'user_id'=> $user_id,
            'expiry'=> $expiry,
            'type'=> $type,
        ]);
    }

    public static function exists($type, $user_id){
        $onetime = OneTimeCode::where('type', $type)
                                ->where('user_id', $user_id)
                                ->where('status', 1)
                                ->where('active', 1)
                                ->get()->first();
        if($onetime){
            $period = DateTime::differenceInHours(
                        Carbon\Carbon::now()->toDateTimeString(),
                        Carbon::parse($onetime->created_at)->addHour($onetime->expiry));
                        if($period < 1){
                            return $onetime;
                        }
        }
        return false;
    }

}
