import { Component } from '@angular/core';
import { MessageService } from './messages/message.service';
import { MessageComponent } from './messages/message.component';
import { Message } from './messages/message.model';
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService]
})
export class AppComponent {
    
}