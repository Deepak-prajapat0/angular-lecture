import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,private router:Router) { }

  isLoggedin:boolean = false;
  isLoggedIn() {
    return this.isLoggedin
  }
 

  login(data:any){
     this.http.post("https://dummyjson.com/auth/login",data).subscribe((res:any)=>{
      if(res){
        localStorage.setItem('token',res.token)
        this.router.navigate(['/http'])
        this.isLoggedin = true
      }
     })
  }
}



