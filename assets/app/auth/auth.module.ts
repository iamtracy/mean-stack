import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { authRouting } from './auth.routing';

import { SignupComponent } from './signup.compenent';
import { SigninComponent } from './signin.component';
import { LogoutComponent } from './logout.compoenent';

@NgModule({
    declarations: [
        LogoutComponent,
        SigninComponent,
        SignupComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        authRouting
    ]
})

export class AuthModule {}