import { Injectable } from '@angular/core';
import { UserModel } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: UserModel[];

  loggedIn = new BehaviorSubject<boolean>(false);


  constructor() {
    let storageUser = localStorage.getItem('users');
    let storageLoggedIn = localStorage.getItem('loggedIn');
    if (storageUser) {
      this.users = JSON.parse(storageUser);
    } else {
      this.users = [];
    }

    if (storageLoggedIn) {
      console.log('logged previously')
      this.loggedIn.next(JSON.parse(storageLoggedIn))
    } else {
      this.loggedIn.next(false);
    }

  }

  addUser(user: UserModel) {
    this.users.push(user);
    localStorage.setItem('users', JSON.stringify(this.users));
    this.loggedIn.next(true);
    this.loggedIn.subscribe((value)=>{
      localStorage.setItem('loggedIn', JSON.stringify(value));
    })
  }

  checkUser(email:string, password: string) :boolean {
    let checked = false;
    this.users.forEach((user: UserModel) =>{
      if(user.email === email && user.password === password){
        checked = true;
        this.loggedIn.next(true);
        this.loggedIn.subscribe((value)=>{
          localStorage.setItem('loggedIn', JSON.stringify(value));
        })
        return;
      }
    });
    return checked;
  }

  logOut() {
    this.loggedIn.next(false);
    localStorage.setItem('loggedIn', JSON.stringify(false));
  }

  getUser(){
    return this.users;
  }
}
