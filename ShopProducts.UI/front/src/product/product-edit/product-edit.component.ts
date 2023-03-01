import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'product/models/product';
import { ProductsService } from 'product/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {


  productForm: Product = new Product();
  constructor(private productService: ProductsService, private route: ActivatedRoute, private navigate: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id);
      this.productService.getProductByID(id).subscribe(
        product => {
          this.productForm = product;
          console.log(product);
        }
      )
    })

  }

  OnSaveProduct() {
    console.log(this.productForm)
    this.productService.editProduct(this.productForm).subscribe(
      response => {
        console.log("POST request successful", response);
        this.navigate.navigate(['/admin/products']);
      },
      error => {
        console.error("POST request failed", console.error());
      }
    );
  }
}
