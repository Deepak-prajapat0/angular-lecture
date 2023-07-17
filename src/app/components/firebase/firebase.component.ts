import { Component } from '@angular/core';
import { Firestore, addDoc, collectionData, doc } from '@angular/fire/firestore';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { collection } from 'firebase/firestore';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
})
export class FirebaseComponent {
  users: any[] = [];
  constructor(private db: Firestore) {}

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[a-zA-Z]+$'),
    ]),
    email: new FormControl('', [Validators.required, Validators.minLength(6)]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
    ]),
    password: new FormControl(''),
    admin: new FormControl(false)
  });

  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }
  get phone() {
    return this.form.get('phone');
  }
  get password() {
    return this.form.get('password');
  }
  get admin() {
    return this.form.get('admin');
  }

  ngOnInit() {
    let data = collection(this.db, 'users');
    return collectionData(data).subscribe((res) => (this.users = res));
  }

  addUser(){
      
      return addDoc(collection(this.db,'users'),this.form.value)
  }
}
