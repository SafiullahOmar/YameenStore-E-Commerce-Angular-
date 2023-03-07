import { Component, OnInit } from '@angular/core';
import { product } from '../dataType';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
  productList: undefined | product[];
  productMessage: undefined | string;
  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.list();
  }
  list() {
    this.product.productList().subscribe((result) => {
      if (result) {
        this.productList = result;
      }
    });
  }
}
