import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted: boolean = false;
  isLoading= false;
  isSignedIn = false;

  constructor(private formBuilder: FormBuilder, private router: Router, public firebaseService : FirebaseService) {
    this.form = this.formBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
  }

 get f(){return this.form.controls}
  onSubmit(){
    this.submitted=true;
    if(this.form.invalid){
      return;
    }
  }

  async onLogin(email:string, password:string){
    await this.firebaseService.login(email, password)
    if(this.firebaseService.isLoggedIn){
      this.isSignedIn = true;
      this.router.navigate(['dashboard'])}
  }
  routeSignup(){
    this.router.navigate(['signup']);
  }
  ngOnInit(): void {

  }
}

