import { Component } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './registerForm.component.html'
})
export class RegisterForm {

  form={
    name:'',
    email:'',
    password:'',
    role:''
  }

  emailRegex =/^[a-z0-9_]{1,}@[a-z]{3,10}[.]{1}[a-z]{3}$/
  registerFn(form:any){
    console.log(form)
  }
}


