import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageService } from '../message/message.service';
import { Message } from '../message/message.model';

@Component({
    selector: 'app-message-component',
    templateUrl: './message-input.component.html',
    styles: [`
        .mat-input-element {
            font-size: 1.4rem;
            padding: 1.2rem;
        }
    `]
})

export class MessageInputComponent implements OnInit{
    message: Message;

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => {
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