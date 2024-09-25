import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product';
import { NotificationsModel } from '../models/notification';
import { CartModel } from '../models/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private notifications: NotificationsModel[];
  private carts: CartModel[];

  constructor() {
    let storageNotifications = localStorage.getItem('notifications');
    let storageCarts = localStorage.getItem('carts');
    if(storageNotifications){
      this.notifications = JSON.parse(storageNotifications);
    } else {
      this.notifications = [];
    }
    if(storageCarts){
      this.carts = JSON.parse(storageCarts);
    } else {
      this.carts = [];
    }
  }


  notifyMe(productName: string,email: string){
    let checked;
    this.notifications.forEach(notification => {
      if(notification.email === email){
        checked = true;
        notification.productName.push(productName);
        localStorage.setItem('notifications', JSON.stringify(this.notifications));
        return;
      }
    })
    if(!checked){
      this.notifications.push({
        email: email,
        productName: [productName]
      })
      localStorage.setItem('notifications', JSON.stringify(this.notifications));
    }
  }

  getNotifications(){
    return this.notifications;
  }

  addToCart(product: ProductModel, email: string){
    let checked;
    this.carts.forEach(cart => {
      if(cart.email === email){
        checked = true;
        cart.product.push({
          productName: product.productName,
          price: product.price - (product.discount * product.price)
        });
        localStorage.setItem('carts', JSON.stringify(this.carts));
        return;
      }
    })
    if(!checked){
      this.carts.push({
        email: email,
        product: [{
          productName: product.productName,
          price: product.price - (product.discount * product.price)
        }]
      })
      localStorage.setItem('carts', JSON.stringify(this.carts));
    }
  }
  getCarts(){
    return this.carts;
  }
}
