import { Component } from '@angular/core';
import { FavoriteChanged } from './components/favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  tweet={
    likesCount: 0,
    title:"title",
    isFavorite:false,
    isLiked:false
  }
  onFavoriteChange(eventArgs:FavoriteChanged){
    console.log("favoriteChanged",eventArgs)
  }
}
