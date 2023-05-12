import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule} from  '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatListModule} from '@angular/material/list'; 
import {MatRadioModule} from '@angular/material/radio';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
//import {MatCheckboxModule} from '@angular/material/checkbox';

//import {MatNativeDateModule} from '@angular/materi';
//import { MatInputModule } from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './services/home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MyComponentComponent,
    RegistrationComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
   //MatNativeDateModule,
    ReactiveFormsModule,
    MatDatepickerModule,
      MatIconModule,
      MatCheckboxModule,
       FormsModule, 
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatListModule,
      MatRadioModule,
      BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
   
    MatIconModule,
    
      RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'registration', component: RegistrationComponentComponent },
      { path: 'login', component: LoginComponentComponent },
       { path: 'my-component',component:MyComponentComponent}
      
    
    ]),
    
  ],
  
  //exports: [MatButtonModule],
  

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
//export class MaterialModule { }
