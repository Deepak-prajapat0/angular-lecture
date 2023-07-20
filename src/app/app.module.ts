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
import { provideFirebaseApp,initializeApp } from '@angular/fire/app';
import {getFirestore,provideFirestore} from '@angular/fire/firestore'
import { environment } from 'src/environment/environment';
import { FirebaseComponent } from './components/firebase/firebase.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list'
import { MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './shared/store/counter.reducers';
import {MatMenuModule} from '@angular/material/menu';


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
    FirebaseComponent,
    SidebarComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    provideFirebaseApp(()=>initializeApp(environment.firebaseConfig)),
    provideFirestore(()=>getFirestore()),
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatRadioModule,
    MatMenuModule,
    StoreModule.forRoot({counter:counterReducer})
  ],
  providers: [ AppErrorHandler,{provide:ErrorHandler,useClass:AppErrorHandler} ],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
