import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  encapsulation: ViewEncapsulation.Emulated,      // shadow dom to prevent css flow on other element
  styles:[
    'p { font-weight: normal; background-color:red }'
    ]
})



export class FavoriteComponent{
  @Input("isSelected") isFavorite:boolean =false
  @Input("isLiked") isLiked:boolean =false
  @Input("likesCount") likesCount:number=0
  @Output() change = new EventEmitter()
  

  onClick(){

    this.isFavorite = !this.isFavorite
    this.change.emit({newValue:this.isFavorite})
  }
  like(){
    this.likesCount +=(this.likesCount)?-1:1
    this.isLiked = !this.isLiked
  }
}


export interface FavoriteChanged{
  newValue:boolean
}
