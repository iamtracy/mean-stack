import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

import { Message } from './message.model';

@Injectable()
export class MessageService {
    private messages: Message[] = [];

    constructor(private http: Http) {}

    addMessage(message: Message) {
        this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http
            .post('/message', body, {headers: headers})
            .map((response: Response) => {
                console.log('success', response.json())
                response.json()
            })
            .catch((error: Response) => Observable.throw(error))
    }

    getMessages() {
        return this.messages;
    }

    deleteMessage(message) {
        this.messages.splice(this.messages.indexOf(message, 1));
    }

}