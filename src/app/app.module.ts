import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { FirebaseService } from './services/firebase.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBuqIjM7j2ANwBIKO8Zvo2kxPZ4JnvE5aI",
    authDomain: "ng-demo-ad7ba.firebaseapp.com",
    projectId: "ng-demo-ad7ba",
    storageBucket: "ng-demo-ad7ba.appspot.com",
    messagingSenderId: "488196795626",
    appId: "1:488196795626:web:86cbe35ab39b7d1f49fb93"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
