import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@Angular/router';

import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})


export class SigninComponent implements OnInit {
    signinForm: FormGroup;

    constructor(private authService: AuthService: private router: Router) {}

    onSubmit() {
        const user = new User(this.signinForm.value.email, this.signinForm.value.password);
        this.authService.signin(user)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                    this.router.navigateByUrl('/');
                },
                err => console.log(err)
            )
        this.signinForm.reset();
    }

    ngOnInit() {
        this.signinForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
            ]),
            password: new FormControl(null, Validators.required)
        })
    }
}