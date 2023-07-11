import { Component, OnInit } from '@angular/core';
import { PostserviceService } from './postservice.service';

@Component({
  selector: 'httpposts',
  templateUrl: './httppost.component.html'
})
export class HttppostComponent implements OnInit{
  posts:any;
  constructor(private service:PostserviceService){}
  ngOnInit(): void {
      this.service.getPosts().subscribe((res)=>{
        this.posts = res;
      })
  }

  createPost(input:HTMLInputElement){
    let post = {id:input.value}
    input.value=''
    this.service.addPosts(post).subscribe(res=>{
      // post['id'] = res
      this.posts.splice(0,0,res)
    })
  }

  updatePost(post:any){
    this.service.updateData(post).subscribe(res=>{
      console.log(res)
    })
  }

  deletePost(post:any){
    this.service.deleteData(post).subscribe(res=>{
      let index = this.posts.indexOf(post);
      this.posts.splice(index,1)
    })
  }

}
