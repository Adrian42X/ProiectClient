import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../loginRegister/login/login.component';
import { RegisterComponent } from '../loginRegister/register/register.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {component:HomeComponent,path:'home'},
  {component:LoginComponent,path:'login'},
  {component:RegisterComponent,path:'register'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
