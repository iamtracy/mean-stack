import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
    selector: 'app-message-component',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent {

    constructor(private messageService: MessageService) {}
    
    onSubmit(form: NgForm) {
        const message = new Message(form.value.content, form.value.username);
        this.messageService
            .addMessage(message)
            .subscribe(
                data => console.log(data),
                error => console.log(error)
            );
        form.resetForm();
    }

}