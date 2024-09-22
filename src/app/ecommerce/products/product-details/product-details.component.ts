import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductModel } from '../../../models/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  @Input() currentProduct: ProductModel;
  
  @Output() notify : EventEmitter<any> = new EventEmitter();
  @Output() cart : EventEmitter<any> = new EventEmitter();

  notifyMe(product: ProductModel){
    this.notify.emit(product);
  }

  addToCart(product: ProductModel){
    this.cart.emit(product);
  }
}
