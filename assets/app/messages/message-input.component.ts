import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
    selector: 'app-message-component',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent implements OnInit{
    message: Message;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => {
                console.log(message);
                return this.message = message
            }
        );
    }
    
    onSubmit(form: NgForm) {
        if(this.message) {
            this.message.content = form.value.content;
            this.messageService
                .updateMessage(this.message)
                .subscribe(
                    result => console.log(result)
                )
            this.message = null;
        } else {
            const message = new Message(form.value.content, form.value.username);
            console.log(message);
            this.messageService
                .addMessage(message)
                .subscribe(
                    data => console.log(data),
                    error => console.log(error)
                );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.message = null;
        form.reset()
    }

}