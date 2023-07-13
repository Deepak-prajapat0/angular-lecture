import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { usernameValidators } from './usernameValidators.component';
import { authGuard } from '../authentication/auth.guard';

@Component({
  selector: 'reactiveForm',
  templateUrl: './reactiveForm.component.html'
})
export class ReactiveformComponent {
  form = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z]+$')
    ]),
    password:new FormControl('',[Validators.required,Validators.minLength(6),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,}')])
  })
  onSubmit(){
    console.log(this.form)
  }
  get username(){
   return this.form.get('username')
  } 
  get password(){
   return this.form.get('password')
  } 
  user: boolean = false;
}
