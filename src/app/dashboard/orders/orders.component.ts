import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartModel } from '../../models/cart';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css'
})
export class OrdersComponent {

  cartService: CartService = inject(CartService)
  orders: CartModel[];
  TotalPrice: number[] = [];

  ngOnInit(): void {
    
    this.orders = this.cartService.getCarts();
    this.getTotalPrice()
  }

  getTotalPrice(){
    this.orders.forEach(order => {
      let totalPrice = 0;
      order.product.forEach(product => {
        totalPrice += product.price;
      });
      this.TotalPrice.push(totalPrice); 
    });
    console.log(this.TotalPrice)
  }


}
