import { Component, OnInit } from '@angular/core';
import { Product } from 'product/models/product';
import { ProductsService } from 'product/services/products.service';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  sortOrder: number;
  sortField: string;
  sortKey: string;

  sortOptions: SelectItem[];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {

    this.productsService.getProducts().subscribe(
      (res: Product[]) => {
        this.products = res;
      }
    );

    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];
  };

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
