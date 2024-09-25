import { Component, inject } from '@angular/core';
import { UserModel } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {

  userService: UserService = inject(UserService);

  customers: UserModel[];

  ngOnInit(): void {
    
    this.customers = this.userService.getUser();
    
  }
}
