import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { RegisterForm } from './components/registerForm/registerForm.component';
import { ReactiveformComponent } from './components/reactiveForm/reactiveForm.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { ZippyComponent } from './components/zippy/zippy.component';
import { HttppostComponent } from './components/httpposts/httppost.component';
import { GithubprofileComponent } from './components/githubprofile/githubprofile.component';
import { WrongurlComponent } from './components/wrongurl/wrongurl.component';
import { authGuard } from './components/authentication/auth.guard';
import { FirebaseComponent } from './components/firebase/firebase.component';

const routes: Routes = [
  {path:"",component:FavoriteComponent},
  {path:"direactive",component:DirectivesComponent},
  {path:"register",component:RegisterForm},
  {path:"reactive-form",canActivate:[authGuard],component:ReactiveformComponent},
  {path:"todo",component:TodolistComponent},
  {path:"change-password",component:ChangepasswordComponent},
  {path:"zippy",component:ZippyComponent},
  {path:"http" ,canActivate:[authGuard], component:HttppostComponent},
  {path:"github/followers",canActivate:[authGuard],component:GithubprofileComponent},
  {path:"github/followers/:year/:date",component:GithubprofileComponent},
  {path:"login",component:ReactiveformComponent},
  {path:"firebase",component:FirebaseComponent},
  // {path:"login",canActivate:[Guard],component:ReactiveformComponent},
  {path:"**",component:WrongurlComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
