import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[]=[
    {
      Id:1,
      Username:"Adrian",
      Password:"parola1"
    },
    {
      Id:2,
      Username:"Stefan",
      Password:"parola2"
    }
  ];

  loggedUser:boolean=false;

  constructor() { }

  login(user:User){
    if(this.users.find(x=>x.Username==user.Username && x.Password==user.Password))
      this.loggedUser=true;
    else
      this.loggedUser=false;
  }

  register(newUser:User){
    if(!this.users.find(x=>x.Username==newUser.Username && x.Password==newUser.Password))
      this.users.push(newUser);
  }
}
