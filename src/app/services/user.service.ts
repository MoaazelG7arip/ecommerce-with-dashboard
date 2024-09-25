import { Injectable } from '@angular/core';
import { UserModel } from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: UserModel[];
  private admins: UserModel[] = [
    {firstName: 'John', lastName: 'Doe', email: 'johndoe@example.com', password: 'password123'},
    {firstName: 'Jane', lastName: 'Smith', email: 'janesmith@example.com', password: 'password456'}
  ];
  private currentUserEmail: string;

  loggedIn = new BehaviorSubject<boolean>(false);


  constructor() {
    let storageUser = localStorage.getItem('users');
    let storageLoggedIn = localStorage.getItem('loggedIn');
    let storageEmail = localStorage.getItem('currentUserEmail');
    if (storageUser) {
      this.users = JSON.parse(storageUser);
    } else {
      this.users = [];
    }

    if (storageLoggedIn) {
      this.loggedIn.next(JSON.parse(storageLoggedIn))
    } else {
      this.loggedIn.next(false);
    }
    if(storageEmail){
      this.currentUserEmail = JSON.parse(storageEmail)
    } else {
      this.currentUserEmail = null;
    }

  }

  addUser(user: UserModel) {
    let checked:boolean;
    this.users.forEach(user1 => {
      if(user.email == user1.email){
        checked = true;
        return;
      };
    });
    if(checked){
      alert('User already exists');
    } else if (!checked){
      this.users.push(user);
      localStorage.setItem('users', JSON.stringify(this.users));
    }
    this.loggedIn.next(true);
    this.loggedIn.subscribe((value)=>{
      localStorage.setItem('loggedIn', JSON.stringify(value));
    })
    this.currentUserEmail =user.email;
    localStorage.setItem('currentUserEmail', JSON.stringify(this.currentUserEmail));
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
    if(checked){
      this.currentUserEmail = email;
      localStorage.setItem('currentUserEmail', JSON.stringify(this.currentUserEmail)); 
    }
    return checked;
  }

  checkAdmin(email: string, password: string){
    let checked = false;
    this.admins.forEach(admin => {
      if(admin.email === email && admin.password === password){
        checked = true;
        console.log('true admin');
        return;
      }
    });
    return checked;
  }

  logOut() {
    this.loggedIn.next(false);
    localStorage.setItem('loggedIn', JSON.stringify(false));
    localStorage.removeItem('currentUserEmail');
  }

  getUser(){
    return this.users;
  }
  getCurrentUserEmail(){
    return this.currentUserEmail;
  }
}
