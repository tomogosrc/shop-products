import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { AppModule } from 'app/app.module';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductsAdminComponent
  ],
  imports: [
    CommonModule,
    AppModule,
    HttpClientModule,
    TableModule,
    DataViewModule,
    ButtonModule,
    RatingModule,
    FormsModule,
    DropdownModule
  ]
})
export class ProductModule { }
