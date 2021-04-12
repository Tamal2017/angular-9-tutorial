import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActionEvent, ProductActionType } from 'src/app/state/product.state';
import { Product } from '../product.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input()
  product: Product;

  @Output()
  productPopulated: EventEmitter<ActionEvent> = new EventEmitter<ActionEvent>();

  constructor() { }

  ngOnInit(): void {
  }

  addProduct(form: NgForm) {
    if (form.valid) {
    this.productPopulated.emit({type: ProductActionType.CREATE_PRODUCT, payload: this.product});
    }
  }
}
