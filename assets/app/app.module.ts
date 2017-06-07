import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MessageModule } from './messages/message/message.module';

import { AuthService } from './auth/auth.service';
import { ErrorService } from './errors/error.service';

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from './auth/authentication.component';
import { routing } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './errors/error.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        routing, 
        HttpModule,
        MessageModule
    ],
    providers: [
        AuthService, 
        ErrorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}