import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PRODUCTS } from '../../../../mock-products';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public page = 1;
  public products: Product[];
  public sort = new FormControl('');

  public ngOnInit(): void {
    this.products = PRODUCTS;
  }

  public sortProductsByPrice(): void {
    switch (this.sort.value) {
      case 'price_low_to_high':
        this.products.sort((a, b) => a.price - b.price);
        break;
      case 'price_high_to_low':
        this.products.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
  }
}
