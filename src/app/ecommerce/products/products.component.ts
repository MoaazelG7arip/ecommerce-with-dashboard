import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductDetailsComponent, FormsModule],
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
  activeRoute: ActivatedRoute = inject(ActivatedRoute);
  
  filterVal = "all";
  updatedProducts;
  ngOnInit(): void {
    let data:string;
    
    this.products = this.productService.getProducts();
    this.activeRoute.queryParamMap.subscribe(query => {
      data = query.get('search');
      this.updateData(data);
    })
  }
  updateData(data:string){
    if(data == "" || data == null || data == undefined) {
      this.products = this.productService.getProducts();
      this.updatedProducts = this.products;
    } else {
      this.products = this.productService.getProducts()
        .filter(product => product.productName.toLowerCase().includes(data.toLowerCase()));
      this.updatedProducts = this.products;
    }
  }
  applyFilter(){
    if(this.filterVal == 'all'){
      this.products = this.updatedProducts;
    }else if(this.filterVal == 'true'){
      this.products = this.updatedProducts.filter(product => product.stock > 0);
    }else if(this.filterVal == 'false'){
      this.products = this.updatedProducts.filter(product => product.stock <= 0);
    }
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
