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
import { AppErrorHandler } from './components/httpposts/appErrorHandler';
import { HeaderComponent } from './components/header/header.component';
import { GithubprofileComponent } from './components/githubprofile/githubprofile.component';
import { WrongurlComponent } from './components/wrongurl/wrongurl.component';
import { RouterComponent } from './components/router/router.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
// import { DataService } from './components/httpposts/dataService.service';
import { provideFirebaseApp,getApp,initializeApp } from '@angular/fire/app';
import {getFirestore,provideFirestore} from '@angular/fire/firestore'
import { environment } from 'src/environment/environment';
import { FirebaseComponent } from './components/firebase/firebase.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


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
    HeaderComponent,
    GithubprofileComponent,
    WrongurlComponent,
    RouterComponent,
    AuthenticationComponent,
    FirebaseComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
    provideFirestore(()=>getFirestore())
  ],
  providers: [ AppErrorHandler,{provide:ErrorHandler,useClass:AppErrorHandler} ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
