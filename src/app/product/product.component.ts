import { Component, OnInit } from '@angular/core';
import { ActionEvent, ProductActionType } from '../state/product.state';

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

  handleActionEvent($event: ActionEvent) {
    switch ($event.type) {
      case ProductActionType.CREATE_PRODUCT:
        this.addProduct($event.payload);
        break;
      case ProductActionType.UPDATE_PRODUCT:
        break;
      case ProductActionType.GET_ALL_PRODUCT:
        break;
    }
    this.product = new Product();
  }

  addProduct(product: Product) {
    this.products.push(product);
  }

}

export class Product {
  name = '';
  quantity = 0;
  available = false;
}
