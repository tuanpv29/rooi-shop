import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { PRODUCTS } from '../../../../mock-products';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  public currentPage = 1;
  public products: Product[];
  public currentProductList: Product[];
  public numberOfProductsPerPage = 9;

  private startProductIndex = 0;
  private endProductIndex = this.numberOfProductsPerPage;

  constructor(private router: Router) {}

  public ngOnInit(): void {
    this.renderProductList();
  }

  public renderProductList(): void {
    this.products = PRODUCTS;
    this.startProductIndex =
      (this.currentPage - 1) * this.numberOfProductsPerPage;
    this.endProductIndex = this.currentPage * this.numberOfProductsPerPage;
    this.currentProductList = this.products.filter(
      (product, index) =>
        this.startProductIndex <= index && index < this.endProductIndex
    );
  }

  public redirectToProductDetail(): void {
    this.router.navigate(['/product/detail'])
  }
}
