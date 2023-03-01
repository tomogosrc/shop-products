import { Component, OnInit } from '@angular/core';
import { Product } from 'product/models/product';
import { Route, Router } from '@angular/router';
import { ProductsService } from 'product/services/products.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss']
})
export class ProductsAdminComponent implements OnInit {

  products: Product[] = [];


  constructor(private productsService: ProductsService, private route: Router) { }

  ngOnInit(): void {

    // fetch all the products 
    this.productsService.getProducts().subscribe(
      (res: Product[]) => {
        this.products = res;
      }
    );
  };

  /**
   * Edit one product from the list
   * @param id 
   */
  editProductFromTheList(id: number) {
    this.navigateToEdit(id);
  }

  /**
   * Remove one product from the list
   * @param id 
   */
  removeProductFromTheList(id: number) {
    this.productsService.removeProduct(id).subscribe(
      (products: Product[]) => this.products = products
    )
  }

  navigateToCreate() {
    this.route.navigate(['/admin/product/create']);
  }

  navigateToEdit(id) {
    this.route.navigate([`/admin/product/edit/${id}`]);
  }


}


