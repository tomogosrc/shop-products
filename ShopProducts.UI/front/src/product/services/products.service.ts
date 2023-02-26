import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from 'product/models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) { }

  /**
   * Get all the products registered
   * @returns 
   */
  public getProducts(): Observable<Product[]> {
    console.log("get all products");
    return this.http.get<Product[]>('assets/products.json');
  }

  /**
   * return one product 
   * @param id 
   * @returns 
   */
  public getOneProduct(id: number): Observable<Product> {
    console.log("get one product with id : " + id);
    return this.http.get<Product[]>('assets/products.json').pipe(
      map(products => products.find(product => product.id === id)));
  }

  /**
   * Remove one product by his ID
   * @param id 
   * @returns
   */
  public removeProduct(id: number): Observable<Product[]> {
    console.log("remove product with id : " + id);
    return this.http.get<Product[]>('assets/products.json');
  }

  /**
   * edit one product 
   * @param product 
   * @returns 
   */
  public editProduct(product: Product): Observable<Product[]> {
    console.log("edit product with id :" + product.id);
    return this.http.get<Product[]>('assets/products.json');
  }

  /**
   * Create a new product
   * @param product 
   * @returns 
   */
  public createProduct(product: Product): Observable<Product[]> {
    console.log("create new product");
    return this.http.get<Product[]>('assets/products.json');
  }


}
