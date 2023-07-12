import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { InputFormatDirective } from './components/input-format.directive';
import { ZippyComponent } from './components/zippy/zippy.component';
import {  RegisterForm } from './components/registerForm/registerForm.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformComponent } from './components/reactiveForm/reactiveForm.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { HttppostComponent } from './components/httpposts/httppost.component';
import {HttpClientModule} from '@angular/common/http'
import { PostserviceService } from './components/httpposts/postservice.service';
import { AppErrorHandler } from './components/httpposts/appErrorHandler';
import { HeaderComponent } from './components/header/header.component';
// import { DataService } from './components/httpposts/dataService.service';


@NgModule({
  declarations: [
    AppComponent,
    FavoriteComponent,
    DirectivesComponent,
    InputFormatDirective,
    ZippyComponent,
    RegisterForm,
    ReactiveformComponent,
    TodolistComponent,
    ChangepasswordComponent,
    HttppostComponent,
    HeaderComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  
  ],
  providers: [ AppErrorHandler,{provide:ErrorHandler,useClass:AppErrorHandler} ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
