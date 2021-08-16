import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  reactiveForm: FormGroup;
  submitted:boolean = false;
  isSignedIn= false;

  constructor(private formBuilder: FormBuilder, private router: Router, public firebaseService: FirebaseService) {
    this.reactiveForm = this.formBuilder.group({
      fname:new FormControl(null,[Validators.required]),
      email:new FormControl(null,[Validators.required, Validators.email]),
      password:new FormControl(null,[Validators.required, Validators.minLength(6)]),
      confirmpassword:new FormControl(null,[Validators.required])
    },
    {
      validators: this.MustMatch('password','confirmpassword')
    })
   }

   get f(){return this.reactiveForm.controls}
    MustMatch(controlName:string,matchingControlName:string){
      return(formGroup:FormGroup)=>{
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if(matchingControl.errors && !matchingControl.errors.MustMatch){
          return
        }
        if(control.value !== matchingControl.value){
          matchingControl.setErrors({MustMatch:true});
        }
        else{
          matchingControl.setErrors(null);
        }
      }
    }

    async onSignup(email:string, password:string){
      await this.firebaseService.signup(email, password)
      if(this.firebaseService.isLoggedIn)
        this.isSignedIn = true;
    }

    onSubmit(){
    this.submitted= true;
    if(this.reactiveForm.invalid){
      return;
    }
    this.router.navigate(['/dashboard']);
  }

  routeLogin(){
   this.router.navigate([''])
  }

   ngOnInit(): void {

  }
}
