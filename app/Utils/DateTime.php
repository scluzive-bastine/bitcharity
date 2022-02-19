<?php
namespace App\Utils;
use Carbon\Carbon;

class DateTime {
    public static function differenceInHours($from, string $to){
        $to = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', $to);
        $from = \Carbon\Carbon::createFromFormat('Y-m-d H:s:i', from);
        $diff_in_hours = $to->diffInHours($from);
        return $diff_in_hours;
    }
}
