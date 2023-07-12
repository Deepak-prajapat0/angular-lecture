import { Component, OnInit } from '@angular/core';
import { PostserviceService } from './postservice.service';
// import { AppError } from './appError';

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
      },error=>{
        console.log(error)
      })
  }

  createPost(input:HTMLInputElement){
    let post = {title:input.value}
    this.posts.splice(0,0,post)
    input.value=''
    this.service.addPosts(post).subscribe(res=>{
      this.posts['id'] = res
    },(error)=>{
      this.posts.splice(0,1);
      // if(error instanceof BadRequestError)
    })
  }

  updatePost(post:any){
    this.service.updateData(post).subscribe(res=>{
      alert('post updated')
    },error=>{
      alert(error.message)
    })
  }

  deletePost(post:any){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1)

    this.service.deleteData(post).subscribe(res=>{
      if(index === -1){
        this.posts.splice(index,1)
        return alert('something wrong')
      }


    })
  }

}
