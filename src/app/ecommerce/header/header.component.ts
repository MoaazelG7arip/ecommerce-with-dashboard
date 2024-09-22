import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  userService: UserService = inject(UserService);
  router:Router = inject(Router);
  log: boolean = false;
  ngOnInit(): void {

    this.userService.loggedIn.subscribe((data)=>{
      this.log = data;
    })
    
    
  }
  
  
  signOut(){
    this.userService.logOut();
    alert('Logged Out Successfully');
    this.router.navigate(['/ecommerce/home']);
  }
}
