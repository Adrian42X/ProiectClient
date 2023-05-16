import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../loginRegister/login/login.component';
import { RegisterComponent } from '../loginRegister/register/register.component';
import { HomeComponent } from '../home/home.component';
import { ProjectRoutingModule } from './project-routing.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  declarations: [HomeComponent,LoginComponent,RegisterComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NzFormModule,
    NzInputModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzTableModule
  ]
})
export class SharedModule { }
