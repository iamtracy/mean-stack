import { Component } from '@angular/core';

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
    message = {
        content: 'Some Content yo',
        author: 'Tracy'
    };
}