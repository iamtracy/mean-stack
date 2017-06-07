import { Component, OnInit } from '@angular/core';
import { Message } from '../message/message.model';
import { MessageService } from '../message/message.service';

@Component({
    selector: 'app-message-list',
    templateUrl:  './messages-list.component.html'
})

export class MessageListComponent implements OnInit {
    messages: Message[] = [];

    constructor(private messageService: MessageService) {}

    ngOnInit() {
        this.messageService
            .getMessages()
            .subscribe(
                (message: Message[]) => {
                    this.messages = message;
                }
            );
    }

}