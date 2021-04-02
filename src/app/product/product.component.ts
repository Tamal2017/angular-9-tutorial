import { Component, OnInit } from '@angular/core';
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

  addProduct(form: NgForm) {
    if (form.valid) {
      this.products.push({ 'name': this.product.name, 'quantity': this.product.quantity, 'available': this.product.available });
      this.product = new Product();
    }
  }

}

export class Product {
  name = '';
  quantity = 0;
  available = false;
}
