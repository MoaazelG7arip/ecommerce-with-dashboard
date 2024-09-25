import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';

@Component({
  selector: 'app-dash-products',
  standalone: true,
  imports: [AddProductComponent,UpdateProductComponent],
  templateUrl: './dash-products.component.html',
  styleUrl: './dash-products.component.css'
})
export class DashProductsComponent {

  productService: ProductService = inject(ProductService);
  products: ProductModel[];
  routeVal:string = '';
  productUpdate;

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addProduct(){
    this.routeVal = 'addproduct'
  }
  updateProduct(product){
    this.routeVal = 'updateproduct';
    this.productUpdate = product;
  }
  deleteProduct(product){

    this.productService.deleteProduct(product.id);
  }
  returnToMain(){
    this.routeVal = ''
  }

}
