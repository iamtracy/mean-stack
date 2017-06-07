import { Component } from '@angular/core';
import { Router } from '@Angular/router';

import { AuthService } from './auth.service';

@Component({
    selector: 'app-logout',
    template: `<button md-raised-button (click)="onLogout()">Logout</button>`
})

export class LogoutComponent {

    constructor(private authService: AuthService, private router: Router) {}

    onLogout() {
        this.authService.logout();
        this.router.navigate(['/auth', 'signin']);
    }

}