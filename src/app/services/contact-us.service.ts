import { Injectable } from '@angular/core';
import { ContactModel } from '../models/contactUs';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private messages: ContactModel[];
  
  constructor() {
    const storedMessages = localStorage.getItem('messages');
    if(storedMessages){
      this.messages = JSON.parse(storedMessages);
    } else {
      this.messages = [];
    }
  }

  addMessage(message: ContactModel){
    this.messages.push(message);
    localStorage.setItem('messages', JSON.stringify(this.messages));
  }

  getMessages(){
    return this.messages;
  }



}
