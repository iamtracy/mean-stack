import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MessageService } from './message.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdCardModule, MdToolbarModule, MdInputModule, MdButtonModule, MdTabsModule } from '@angular/material';

import { MessagesComponent } from '../messages.component';
import { MessageComponent } from './message.component';
import { MessageListComponent } from '../message-list/message-list.component';
import { MessageInputComponent } from '../message-input/message-input.component';

@NgModule({
    declarations: [
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        BrowserAnimationsModule,
        MdCardModule,
        MdButtonModule,
        MdTabsModule,
        MdInputModule,
        MdToolbarModule
    ],
    providers: [
        MessageService
    ]
})

export class MessageModule {}