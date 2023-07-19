import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../reactiveForm/user.service';
import { MatDialog } from '@angular/material/dialog';
import { RegisterForm } from '../registerForm/registerForm.component';
import { animate, state, style, transition, trigger } from '@angular/animations';


const routerLinks =[{ name: "Home",link: "/"},
    { name: "Direactive",link: "/direactive"},
    { name: "RegisterForm",link: "/register"},
    { name: "Reactive-form",link: "/reactive-form"},
    { name: "todo",link: "/todo"},
    { name: "zippy",link: "/zippy"},
    { name: "change password",link: "/change-password"},
    { name: "http",link: "/http"},
    { name: "Github",link: "/github/followers"},
    { name: "firebase",link: "/firebase"},
]

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css'],
})

export class HeaderComponent {
 links: any[] =routerLinks;
 constructor(private router:Router,private loggerService :UserService,public dialog: MatDialog){}
 loggedIn : any


 openDialog() {
   const dialogRef = this.dialog.open(RegisterForm);

   dialogRef.afterClosed().subscribe(result => {
     console.log(`Dialog result: ${result}`);
   });
 }

 ngOnInit(){
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem('token') ){
          this.loggerService.isLoggedin = true
          this.loggedIn = this.loggerService.isLoggedin
        }
        else{
          this.loggerService.isLoggedin = false
          this.loggedIn = this.loggerService.isLoggedin
        }
      }
    })
 }

 logout(){
        localStorage.removeItem('token')
        this.loggerService.isLoggedin = false
        this.loggedIn = this.loggerService.isLoggedin
        this.router.navigate(['/login'])
 }
}
