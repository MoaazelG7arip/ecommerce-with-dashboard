import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  productService: ProductService = inject(ProductService)

  productForm: FormGroup;
  @Output() emit = new EventEmitter();


  constructor(private fb: FormBuilder) {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      brand: ['', Validators.required],
      size: this.fb.array([this.fb.control('',Validators.required)]),
      color: this.fb.array([this.fb.control('',Validators.required)]),
      price: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required],
      discount: ['', [Validators.min(0), Validators.max(100),Validators.required]],
    });
  }

  get size() {
    return this.productForm.get('size') as FormArray;
  }

  get color() {
    return this.productForm.get('color') as FormArray;
  }

  addSize() {
    this.size.push(this.fb.control(''));
  }

  removeSize(index: number) {
    this.size.removeAt(index);
  }

  addColor() {
    this.color.push(this.fb.control(''));
  }

  removeColor(index: number) {
    this.color.removeAt(index);
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productForm.patchValue({
        discount: this.productForm.value.discount / 100
      })
      this.productService.addproduct(this.productForm.value);
      this.emit.emit();
    } else {
      console.log('Form is invalid');
    }
  }
  exit(){
    this.emit.emit();
  }
}

