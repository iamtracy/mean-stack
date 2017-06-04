import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.model';

@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
    styles: [`
        .author {
            display: inline-block;
            font-style: italic;
            font-size: 1.75rem;
            width: 80%;
        }
        .config {
            display: inline-block;
            text-align: right;
            font-size: 1.25rem;
            width: 19%;
        }
    `]
})
export class MessageComponent {
    @Input() messages: Message[];
    @Output() editClicked = new EventEmitter<string>();

    onEdit() {
        this.editClicked.emit('A new value');
    }
}