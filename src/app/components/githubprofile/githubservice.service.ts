import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {

  constructor(private http:HttpClient) { }
  url: string = "https://api.github.com/users/Deepak-prajapat0/followers";
  
  getProfile(){
    return this.http.get(this.url)
  }
}
