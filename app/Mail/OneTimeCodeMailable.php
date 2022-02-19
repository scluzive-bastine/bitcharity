<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OneTimeCodeMailable extends Mailable
{
    use Queueable, SerializesModels;
    public $code;
    public $expiresIn;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($code, $expiresIn)
    {
        $this->code = $code;
        $this->expiresIn = $expiresIn;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.oneTimeCode');
    }
}
