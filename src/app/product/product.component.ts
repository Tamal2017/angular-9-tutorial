import { Component, EventEmitter, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Array<Product> = [];
  product: Product = new Product();

  constructor() { }

  ngOnInit(): void {
  }

  addProduct($event: Product) {
    this.products.push($event);
    this.product = new Product();
  }

}

export class Product {
  name = '';
  quantity = 0;
  available = false;
}
