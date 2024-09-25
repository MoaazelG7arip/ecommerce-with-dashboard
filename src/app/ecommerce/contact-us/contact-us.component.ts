import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { ContactUsService } from '../../services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {


  contactUsService: ContactUsService = inject(ContactUsService);

  contactForm: FormGroup;
  submitted = false;

  ngOnInit(): void {
    
    this.contactForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required, Validators.minLength(10)]),
    });
    
  }

  onSubmit(){
    this.submitted = true;
    this.contactUsService.addMessage(this.contactForm.value);
  }
  canExit(){
    if (this.contactForm.dirty && !this.submitted){
      let confirmation = confirm("Are you sure you want to exit?\nYou entered some information.");
      return confirmation;
    } else {
      return true;
    }
  }














  get name(){
    return this.contactForm.get('name');
  }
  get email(){
    return this.contactForm.get('email');
  }
  get message(){
    return this.contactForm.get('message');
  }
}
