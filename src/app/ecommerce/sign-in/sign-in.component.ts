import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {

  
  userService: UserService = inject(UserService);
  router: Router = inject(Router);

  loginForm: FormGroup;
  submitted = false;

  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // If the form is invalid, stop the submission
    if (this.loginForm.invalid) {
      return;
    }

    // Otherwise, process the form (for now just log the values)
    if(this.userService.checkUser(this.loginForm.value.email, this.loginForm.value.password)){
      alert('Welcome, you have successfully logged in');
      this.router.navigate(['/ecommerce/products']);
    } else {
      alert('Wrong email or password')
    }

  }
}
