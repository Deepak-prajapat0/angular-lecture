import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { usernameValidators } from './usernameValidators.component';

@Component({
  selector: 'reactiveForm',
  templateUrl: './reactiveForm.component.html'
})
export class ReactiveformComponent {
  form = new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      usernameValidators.cannotContainSpace
    ]),
    password:new FormControl('',Validators.required)
  })
  get username(){
    return this.form.get('username')
  }
}
