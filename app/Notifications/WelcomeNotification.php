<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class WelcomeNotification extends Notification implements ShouldQueue
{
    use Queueable;
    public $dataUser;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($dataUser)
    {
        $this->dataUser = $dataUser;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail','database'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                ->subject('Welcome Mail')
                ->greeting('Hello '.$this->dataUser['name'].' !')
                ->line('Welcome to Joined Our Team')
                ->line('You have Successfully registered as '.$this->dataUser['role_name'])
                ->action('Click here to login your account', url('/'));
                
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
         return [
                'description' => 'You have Successfully registered as '.$this->dataUser['role_name'] 
            ];
    }
}
