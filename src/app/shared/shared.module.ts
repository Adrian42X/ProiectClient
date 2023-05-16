import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../loginRegister/login/login.component';
import { RegisterComponent } from '../loginRegister/register/register.component';
import { HomeComponent } from '../home/home.component';
import { ProjectRoutingModule } from './project-routing.module';



@NgModule({
  declarations: [HomeComponent,LoginComponent,RegisterComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class SharedModule { }
