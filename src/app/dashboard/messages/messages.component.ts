import { Component, inject } from '@angular/core';
import { ContactModel } from '../../models/contactUs';
import { ContactUsService } from '../../services/contact-us.service';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {

  contactService: ContactUsService = inject(ContactUsService);
  messages:ContactModel[];
  ngOnInit(): void {
    
    this.messages = this.contactService.getMessages();
  }

}
