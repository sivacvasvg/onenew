import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { RegistrationComponentComponent } from './registration-component/registration-component.component';

const routes: Routes = [
  /*{ path: 'registration', component: RegistrationComponentComponent },
  { path: 'login', component: LoginComponentComponent },
  { path: 'my-component',component:MyComponentComponent}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
