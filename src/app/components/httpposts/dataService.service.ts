import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";




// @Injectable()

export class DataService{
    constructor(private url:string,private http:HttpClient){}

    getPosts(){
        return this.http.get(this.url)
      }
      addPosts(resource:any){
        return this.http.post(this.url,JSON.stringify(resource))
      }
      updateData(resource:any){
        return this.http.patch(this.url+'/'+resource.id,JSON.stringify({title:"new title"}))
      }
      deleteData(resource:any){
        return this.http.delete(this.url+'/'+resource.id)
      }
    
}