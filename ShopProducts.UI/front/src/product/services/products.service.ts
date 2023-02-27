import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'product/models/product';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = "ShopProducts";

  constructor(private http: HttpClient) { }

  /**
   * Get all the products registered
   * @returns 
   */
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl}/${this.url}`);

    // console.log("get all products");
    // return this.http.get<Product[]>('assets/products.json');
  }


  /**
   * Remove one product by his ID
   * @param id 
   * @returns
   */
  public removeProduct(id: number): Observable<Product[]> {
    return this.http.delete<Product[]>(
      `${environment.apiUrl}/${this.url}/${id}`
    );
    // return this.http.get<Product[]>('assets/products.json');
  }

  /**
   * edit one product 
   * @param product 
   * @returns 
   */
  public editProduct(product: Product): Observable<Product[]> {

    return this.http.put<Product[]>(
      `${environment.apiUrl}/${this.url}`,
      product
    );
    // return this.http.get<Product[]>('assets/products.json');
  }

  /**
   * Create a new product
   * @param product 
   * @returns 
   */
  public createProduct(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(
      `${environment.apiUrl}/${this.url}`,
      product
    );
    // return this.http.get<Product[]>('assets/products.json');
  }


}
