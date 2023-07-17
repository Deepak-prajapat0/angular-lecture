import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { LoggerService } from 'src/app/logger-service.service';
import {  Router } from '@angular/router';


@Component({
  selector: 'reactiveForm',
  templateUrl: './reactiveForm.component.html'
})
export class ReactiveformComponent {

  constructor(private userService:UserService,private loggerService:LoggerService,private router:Router)
  {
    if (this.loggerService.isLoggedin || localStorage.getItem('token')) {
      this.router.navigate(['/'])
    }
  }


 
  form = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z]+$')
    ]),
    password:new FormControl('',[Validators.required,Validators.minLength(6)])
  })
  onSubmit(){
    this.userService.login(this.form.value)
  }
  isLogin(){
   this.userService.login(this.form.value)
  }
  get username(){
   return this.form.get('username')
  } 
  get password(){
   return this.form.get('password')
  } 
  
}


// username:"kminchelle"
// password:"0lelplR"
