import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductModel[] = [
    {
        "id": 1,
        "productName": "Air Max 270",
        "brand": "Nike",
        "description": "The Nike Air Max 270 offers unparalleled comfort with its signature large Air unit, delivering a soft and smooth ride.",
        "size": [36,42],
        "color": ["Black","White"],
        "price": 150.00,
        "stock": 10,
        "discount": 0
    },
    {
        "id": 2,
        "productName": "Ultraboost 21",
        "brand": "Adidas",
        "description":"Experience the ultimate in running performance with the Adidas Ultraboost 21. Featuring responsive Boost cushioning.",
        "size": [44],
        "color": ["Blue"],
        "price": 180.00,
        "stock": 5,
        "discount": 0.1
    },
    {
        "id": 3,
        "productName": "Classic Leather",
        "brand": "Reebok",
        "description":"Retro style meets modern comfort with the Puma Suede Classic. This iconic sneaker features a soft suede upper",
        "size": [41],
        "color": ["White"],
        "price": 90.00,
        "stock": 12,
        "discount": 0.2
    },
    {
        "id": 4,
        "productName": "Chuck Taylor All Star",
        "brand": "Converse",
        "description":"A timeless classic, the Converse Chuck Taylor All Star brings a retro vibe to your everyday look. Its canvas upper",
        "size": [43],
        "color": ["Red"],
        "price": 60.00,
        "stock": 0,
        "discount": 0
    },
    {
        "id": 5,
        "productName": "Gel-Kayano 28",
        "brand": "Asics",
        "description":"The Asics Gel-Kayano 28 is engineered for long-distance running, offering advanced stability and cushioning",
        "size": [45,46,47],
        "color": ["Gray"],
        "price": 160.00,
        "stock": 8,
        "discount": .5
    },
    {
        "id": 6,
        "productName": "Puma Suede Classic",
        "brand": "Puma",
        "description":"Retro style meets modern comfort with the Puma Suede Classic. This iconic sneaker features a soft suede upper",
        "size": [42],
        "color": ["Green"],
        "price": 70.00,
        "stock": 0,
        "discount": .2
    },
    {
        "id": 7,
        "productName": "Zoom Freak 3",
        "brand": "Nike",
        "description":"The Nike Air Max 270 offers unparalleled comfort with its signature large Air unit, delivering a soft and smooth ride.",
        "size": [39,44],
        "color": ["Purple"],
        "price": 120.00,
        "stock": 7,
        "discount": 0
    },
    {
        "id": 8,
        "productName": "NMD_R1",
        "brand": "Adidas",
        "description":"Experience the ultimate in running performance with the Adidas Ultraboost 21. Featuring responsive Boost cushioning",
        "size": [43],
        "color": ["Black","Blue"],
        "price": 140.00,
        "stock": 9,
        "discount": 0
    },
    {
        "id": 9,
        "productName": "Jordan 1 Retro High",
        "brand": "Nike",
        "description":"The Nike Air Max 270 offers unparalleled comfort with its signature large Air unit, delivering a soft and smooth ride.",
        "size": [44,46],
        "color": ["White","Red"],
        "price": 200.00,
        "stock": 0,
        "discount": .25
    },
    {
        "id": 10,
        "productName": "Hovr Phantom 2",
        "brand": "Under Armour",
        "description":"Retro style meets modern comfort with the Puma Suede Classic. This iconic sneaker features a soft suede upper",
        "size": [33,36,38,39],
        "color": ["Black"],
        "price": 130.00,
        "stock": 6,
        "discount": 0
    }
]

  
  constructor() { }

  getProducts(){
    return this.products;
  }
}
