import { Component } from '@angular/core';
import { MessageComponent } from './messages/message.component';
import { Message } from './messages/message.model';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent {
    messages: Message[] = [
        new Message('Some Content yo', 'Tracy'),
        new Message('Some more Content mehh', 'Beetlejuice'),
        new Message('Yooooo', 'Chris')
    ];
}