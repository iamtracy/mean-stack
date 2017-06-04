import { Component } from '@angular/core';

@Component({
    selector: 'app-message-component',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent {
    
    onSave(inputValue: string) {
        console.log(inputValue)
    }

}