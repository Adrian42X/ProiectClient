import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[]=[];

  loggedUser:boolean=false;
  baseURL="https://localhost:44361/api/User";
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient:HttpClient) { 
    this.httpClient.get<User[]>(this.baseURL).subscribe({
      next:response=>this.users=response,
    });
    console.log(this.users);
  }

  login(email:string,password:string){
    if(this.users.find(x=>x.email==email && x.password==password))
      this.loggedUser=true;
    else
      this.loggedUser=false;
  }

  
  register(user: User) {
    this.httpClient.post<User>(this.baseURL,user,this.httpOptions);
    console.log(user);
  }
}