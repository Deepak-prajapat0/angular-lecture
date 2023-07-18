import { Component, OnInit } from '@angular/core';
import { PostserviceService } from './postservice.service';
import { animate, animateChild, query, style, transition, trigger } from '@angular/animations';
// import { AppError } from './appError';

@Component({
  selector: 'httpposts',
  templateUrl: './httppost.component.html',
  animations:[
    trigger('slideAnimation',[
      transition(':enter',[
        style({offset:.2,transform:"scale(.6)",easing:"ease-out"}),
        animate(500)
      ]),
      transition(':leave',[
        style({transform:"scale(1)",easing:"ease-out"}),
        animate(500)
      ])
    ])
  ]
})

export class HttppostComponent implements OnInit{
  posts:any;
  constructor(private service:PostserviceService){}
  ngOnInit(): void {
      this.service.getPosts().subscribe((res)=>{ 
        this.posts = res;
      },()=>{
        alert("something is wrong")
      })
  }

  createPost(input:HTMLInputElement){
    let post = {title:input.value}
    this.posts.splice(0,0,post)
    input.value=''
    this.service.addPosts(post).subscribe(res=>{
      // this.posts['id'] = res
      if(!res){
        this.posts.splice(0,1)
      }
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
