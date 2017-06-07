import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html'
})
export class MessageComponent {
    @Input() message: Message;

    constructor(private messageService: MessageService) {}

    onEdit() {
        this.messageService.editMessage(this.message);
    }

    onDelete(index) {
        this.messageService
            .deleteMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
    }

    belongsToUser() {
        return localStorage.getItem('userId') == this.message.userId;
    }

}