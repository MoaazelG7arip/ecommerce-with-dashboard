import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,RouterLink],
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
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      role: new FormControl('user', [Validators.required])
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
    if(this.f['role'].value == 'user'){
      if(this.userService.checkUser(this.loginForm.value.email, this.loginForm.value.password)){
        alert('Welcome, you have successfully logged in');
        this.router.navigate(['/ecommerce/products']);
      } else {
        alert('Wrong email or password')
      }
    } else if(this.f['role'].value == 'admin'){
      if(this.userService.checkAdmin(this.loginForm.value.email, this.loginForm.value.password)){
        alert('Welcome, you have successfully logged in as an admin');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Wrong email or password')
      }
    }

  }

  canExit(){
    if (this.loginForm.dirty && !this.submitted){
      let confirmation = confirm("Are you sure you want to exit?\nYou entered some information.");
      return confirmation;
    } else {
      return true;
    }
  }
}
