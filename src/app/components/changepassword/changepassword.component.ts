import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordValidators } from './passwrod.validators';

@Component({
  selector: 'changepassword',
  templateUrl: './changepassword.component.html',
})
export class ChangepasswordComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      currentPassword: ['',Validators.required,passwordValidators.validCurrentPassword],
      newPassword: ['',[ Validators.required,Validators.minLength(6),Validators.pattern('[a-zA-Z0-9]+$')]],
      confirmPassword: ['', Validators.required],
    },{validators:passwordValidators.passwordsShouldMatch});
   
  }
  get currentPassword(){ 
    return this.form.get('currentPassword')
  }
  get newPassword(){ 
    return this.form.get('newPassword')
  }
  get confirmPassword(){ 
    return this.form.get('confirmPassword')
  }

  done(){
    console.log(this.form)
  }
}
