<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class WelcomeNotificationMessageToInvitedByUser extends Notification implements ShouldQueue
{
    use Queueable;
    public $dataInvited;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($dataInvited)
    {
        $this->dataInvited = $dataInvited;
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
                ->subject('Invited User Joined')
                ->greeting('Hello '.$this->dataInvited['invitedByName'].' !')
                ->line($this->dataInvited['invitedToName'].' - ( '.$this->dataInvited['invitedToRole'].' ) '.$this->dataInvited['invitedToEmail'].' Successfully Joined by your Invitation Link',)
                ->action('Click here to login your account to view details', url('/'));
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
            'description' => $this->dataInvited['invitedToName'].' - ('.$this->dataInvited['invitedToRole'].' ) '.$this->dataInvited['invitedToEmail'].' Successfully Joined by your Invitation Link', 
        ];
    }
}
