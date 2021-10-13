import { NgModule } from '@angular/core';
import { Validators } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [{
  path: '',
  children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent },
    {path: '**', redirectTo: 'login'}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class AuthRoutingModule { }
