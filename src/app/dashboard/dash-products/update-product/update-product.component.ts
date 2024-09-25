import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductModel } from '../../../models/product';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css'
})
export class UpdateProductComponent {

  productService: ProductService = inject(ProductService);
  @Input() productInput:ProductModel;

  productForm: FormGroup;
  @Output() emit = new EventEmitter();


  constructor(private fb: FormBuilder) {
  }
  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: [this.productInput.productName, Validators.required],
      brand: [this.productInput.brand, Validators.required],
      size: this.fb.array([]),
      color: this.fb.array([]),
      price: [this.productInput.price, [Validators.required, Validators.min(0)]],
      stock: [this.productInput.stock, [Validators.required, Validators.min(0)]],
      description: [this.productInput.description, Validators.required],
      discount: [this.productInput.discount, [Validators.min(0), Validators.max(100),Validators.required]],
    });
    console.log(this.productInput)
    this.productForm.patchValue({
      size: this.productInput.size.forEach((size)=>{
        this.size.push(this.fb.control(size));
      }),
      color: this.productInput.color.forEach((color)=>{
        this.color.push(this.fb.control(color));
      }),
      discount: this.productInput.discount * 100
    })
    
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
      this.productService.updateproduct(this.productForm.value,this.productInput.id);
      this.emit.emit();
    } else {
      console.log('Form is invalid');
    }
  }
  exit(){
    this.emit.emit();
  }
}
