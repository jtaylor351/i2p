import { UserService } from './user.service';
import { HackathonService } from './hackathon.service';
import { AuthService } from './auth/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HackathonPreviewComponent } from './hackathon-preview/hackathon-preview.component';
import { HackathonComponent } from './hackathon/hackathon.component';
import { UserPreviewComponent } from './user-preview/user-preview.component';
import { InterestedHackathonPreviewComponent } from './interested-hackathon-preview/interested-hackathon-preview.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { MyConnectionsComponent } from './my-connections/my-connections.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingPageComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    AboutUsComponent,
    HackathonPreviewComponent,
    HackathonComponent,
    UserPreviewComponent,
    InterestedHackathonPreviewComponent,
    MessagesComponent,
    ProfileComponent,
    MyConnectionsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    routing,
    HttpModule
  ],
  providers: [AuthService, HackathonService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
