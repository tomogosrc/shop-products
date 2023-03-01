import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Product } from 'product/models/product';
import { ProductsService } from 'product/services/products.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  value1: string;
  productForm: Product = new Product();
  // productForm = {
  //   id: 0,
  //   code: '',
  //   name: '',
  //   description: '',
  //   image: '',
  //   price: 0,
  //   category: '',
  //   quantity: 0,
  //   inventoryStatus: '',
  //   rating: 0
  // }

  constructor(private productService: ProductsService, private route: Router) { }

  ngOnInit(): void {
  }

  onCreateProduct() {
    console.log(this.productForm)
    this.productService.createProduct(this.productForm).subscribe(
      response => {
        console.log('POST request successful', response);
        this.route.navigate(['/admin/products']);
      },
      error => {
        console.error("POST request failed", error);
      }
    );
  }

}
