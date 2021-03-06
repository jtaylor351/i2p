import { ProfileComponent } from './profile/profile.component';
import { MessagesComponent } from './messages/messages.component';
import { HackathonComponent } from './hackathon/hackathon.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Routes, RouterModule } from '@angular/router';


const APP_ROUTES: Routes = [
    {path: '', component: LandingPageComponent, pathMatch: 'full'},
    {path: 'user/signup', component: SignUpComponent},
    {path: 'hackathon/:hackathon', component: HackathonComponent},
    {path: 'user/login', component: LoginComponent},
    {path: 'home/profile', component: ProfileComponent},
    {path: 'home/messages', component: MessagesComponent},
    {path: 'about', component: AboutUsComponent},
    {path: 'home', component: HomeComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
