import { Router } from '@Angular/router';
import { ErrorService } from './error.service';
import { Component, OnInit } from '@angular/core';

import { Error } from './error.model';

@Component({
    selector: 'app-error',
    templateUrl: './error.component.html',
    styles: [`
        .backdrop {
            background-color: rgba(0,0,0,0.6);
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
        }
    `]
})

export class ErrorComponent implements OnInit{ 
    error: Error;
    display = 'none';
    buttonText = 'Close';

    constructor(private errorService: ErrorService, private router: Router) {}

    onErrorHandled() {
        this.display = 'none';
        this.router.navigateByUrl('/auth/signin');
    }

    ngOnInit() {
        this.errorService
            .errorOccured
            .subscribe(
                (error: Error) => {
                    this.error = error;
                    this.display = 'block';
                    if(this.error.title == "Not Authenticated") {
                        this.buttonText = 'Login';
                    }
                }
            );
    }

}