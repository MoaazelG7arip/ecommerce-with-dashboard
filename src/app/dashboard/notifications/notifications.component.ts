import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { NotificationsModel } from '../../models/notification';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [],
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent {

  cartService: CartService = inject(CartService);
  notifications: NotificationsModel[];

  ngOnInit(): void {
    
    this.notifications = this.cartService.getNotifications();
    
  }

}
