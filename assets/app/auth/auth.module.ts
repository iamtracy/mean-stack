import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { authRouting } from './auth.routing';


import { MdCardModule, MdToolbarModule, MdInputModule, MdButtonModule, MdMenuModule ,MdTabsModule } from '@angular/material';

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
        authRouting,
        MdInputModule,
        MdButtonModule,
        MdMenuModule,
        MdTabsModule
    ]
})

export class AuthModule {}