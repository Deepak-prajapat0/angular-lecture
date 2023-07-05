import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html'
})


export class FavoriteComponent{
  @Input("isSelected") isFavorite:boolean =false
  @Output() change = new EventEmitter()
  // isFavorite: boolean = true;
  
  onClick(){
    this.isFavorite = !this.isFavorite
    this.change.emit({newValue:this.isFavorite})
  }
}


export interface FavoriteChanged{
  newValue:boolean
}