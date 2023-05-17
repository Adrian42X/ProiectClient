import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[]=[
    {
      Id:1,
      email:"stefan.roadevin@gmail.com",
      password:"parola1",
      firstName:"adi",
      lastName:"vali"
    },
    {
      Id:2,
      email:"adiadrian@gmail.com0",
      password:"parola2",
      firstName:"aurel",
      lastName:"aviaa"
    }
  ];

  loggedUser:boolean=false;

  constructor() { }

  login(email:string,password:string){
    if(this.users.find(x=>x.email==email && x.password==password))
      this.loggedUser=true;
    else
      this.loggedUser=false;
  }

  
  register(user: User) {
    this.users.push(user); 
    console.log(user);
  }
}
