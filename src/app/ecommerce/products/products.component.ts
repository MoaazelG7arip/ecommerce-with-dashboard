import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductDetailsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  products: ProductModel[];

  currentProduct: ProductModel;
  productService: ProductService = inject(ProductService);
  userService: UserService = inject(UserService);
  cartService: CartService = inject(CartService);
  router: Router = inject(Router);

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  goToDetails(product: ProductModel){
    this.currentProduct = product;
  }
  notifyMe(product: ProductModel){
    let loggedIn:boolean;
    this.userService.loggedIn.subscribe((data)=>{
      loggedIn = data;
    })
    if(loggedIn){
      alert(`Thank you, We will notify administrator to add ${product.productName}`);
      let currentUserEmail = this.userService.getCurrentUserEmail()
      this.cartService.notifyMe(product.productName,currentUserEmail)
    } else {
      let confimation = confirm("Please sign in first");
      if(confimation){
        this.router.navigate(['/ecommerce/sign-in'])
      }
    }
  }
  addToCart(product: ProductModel){
    let loggedIn:boolean;
    this.userService.loggedIn.subscribe((data)=>{
      loggedIn = data;
    })
    if(loggedIn){
      alert(`Thank you, We will add ${product.productName} to your cart`);
      let currentUserEmail = this.userService.getCurrentUserEmail()
      this.cartService.addToCart(product,currentUserEmail)
    } else {
      let confimation = confirm("Please sign in first");
      if(confimation){
        this.router.navigate(['/ecommerce/sign-in'])
      }
    }
  }

}
