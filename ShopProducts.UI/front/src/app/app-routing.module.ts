import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from 'product/product-create/product-create.component';
import { ProductEditComponent } from 'product/product-edit/product-edit.component';
import { ProductsAdminComponent } from 'product/products-admin/products-admin.component';
import { ProductsComponent } from 'product/products/products.component';

const routes: Routes = [
  { path: '', component: ProductsAdminComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'admin/products', component: ProductsAdminComponent },
  { path: 'admin/product/create', component: ProductCreateComponent },
  { path: 'admin/product/edit/:id', component: ProductEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})

export class AppRoutingModule { }
