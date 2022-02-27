<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VerifiedPhone extends Model
{
    use HasFactory;
    protected $fillable = [
        'info', 'active', 'status', 'user_id'
    ];

    public static function exisiting($user_id){
        if($s = VerifiedPhone::where('user_id', $user_id)
            ->where('status', 1)->first()){
                return $s;
            }
            return false;
    }
    public static function unverified($user_id){
        return VerifiedPhone::where('user_id', $user_id)
                            ->where('status', 0)
                            ->get()->first();
    }
}
