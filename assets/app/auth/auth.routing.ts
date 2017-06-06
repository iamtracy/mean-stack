import { Routes, RouterModule } from '@Angular/router';

import { LogoutComponent } from './logout.compoenent';
import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.compenent';

const AUTH_ROUTES: Routes = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
];

export const authRouting = RouterModule.forChild(AUTH_ROUTES);