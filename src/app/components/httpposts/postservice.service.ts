import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {
  private url  ='https://jsonplaceholder.typicode.com/posts'
  constructor(private http:HttpClient) { }

  getPosts(){
    return this.http.get(this.url)
  }
  addPosts(input:any){
    return this.http.post(this.url,JSON.stringify(input))
  }
  updateData(post:any){
    return this.http.patch(this.url+'/'+post.id,JSON.stringify({title:"new title"}))
  }
  deleteData(post:any){
    return this.http.delete(this.url+'/'+post.id)
  }
}
