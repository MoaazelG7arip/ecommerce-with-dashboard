import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  userService: UserService = inject(UserService);
  router: Router = inject(Router);

  registerForm: FormGroup;
  submitted = false;
  ngOnInit(){
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }



  // Handle form submission
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    // Process form data
    this.userService.addUser(this.registerForm.value);

    alert('Welcome! You have successfully registered');

    this.router.navigate(['/ecommerce/products']);

  }

  // Helper to get form controls easily in template
  get f() {
    return this.registerForm.controls;
  }
}
