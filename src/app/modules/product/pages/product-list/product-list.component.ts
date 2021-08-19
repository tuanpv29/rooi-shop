import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
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
  public productsOnCurrentPage: Product[];
  public numberOfProductsPerPage = 9;

  private startProductIndex = 0;
  private endProductIndex = this.numberOfProductsPerPage;

  public ngOnInit(): void {
    this.renderProductList();
  }

  public renderProductList(): void {
    this.products = PRODUCTS;
    this.showProductsOnCurrentPage();
  }

  public showProductsOnCurrentPage(): void {
    this.startProductIndex =
      (this.currentPage - 1) * this.numberOfProductsPerPage;
    this.endProductIndex = this.currentPage * this.numberOfProductsPerPage;
    this.productsOnCurrentPage = this.products.filter(
      (product, index) =>
        this.startProductIndex <= index && index < this.endProductIndex
    );
  }
}
