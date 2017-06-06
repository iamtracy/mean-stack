import { RouterModule } from '@Angular/router';
import { LogoutComponent } from './logout.compoenent';
import { SigninComponent } from './signin.component';
import { SignupComponent } from './signup.compenent';
var AUTH_ROUTES = [
    { path: '', redirectTo: 'signup', pathMatch: 'full' },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
];
export var authRouting = RouterModule.forChild(AUTH_ROUTES);
