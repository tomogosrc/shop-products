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
  private products: Product[];

  constructor(private http: HttpClient) { }

  /**
   * first init database with some datas
   */
  public init() {
    this.http.get<Product[]>('assets/products.json').subscribe(
      pro => {
        this.products = pro;
        console.log(this.products);
        this.products.forEach(e => {
          console.log(e);
          const data = {
            "id": 0,
            "code": e.code,
            "name": e.name,
            "description": e.description,
            "price": e.price,
            "quantity": e.quantity,
            "inventoryStatus": e.inventoryStatus,
            "category": e.category,
            "image": e.image,
            "rating": e.rating
          }
          this.http.post<Product[]>(
            `${environment.apiUrl}/${this.url}`,
            data
          ).subscribe(
            response => {
              console.log("ok")
            },
            error => {
              console.log("error", error);
            }
          )
        });
      }
    )
  }

  /**
   * Get all the products registered
   * @returns 
   */
  public getProducts(): Observable<Product[]> {


    return this.http.get<Product[]>(`${environment.apiUrl}/${this.url}`);

    //console.log("get all products");
    //return this.http.get<Product[]>('assets/products.json');
  }

  /**
   * Get product by his ID
   * @returns 
   */
  public getProductByID(id): Observable<Product> {


    return this.http.get<Product>(`${environment.apiUrl}/${this.url}/${id}`);

    //console.log("get all products");
    //return this.http.get<Product[]>('assets/products.json');
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

    const data = {
      "id": product.id,
      "code": product.code,
      "name": product.name,
      "description": product.description,
      "price": product.price,
      "quantity": product.quantity,
      "inventoryStatus": product.inventoryStatus,
      "category": product.category,
      "image": product.image,
      "rating": product.rating
    }
    return this.http.put<Product[]>(
      `${environment.apiUrl}/${this.url}`,
      data
    );
    // return this.http.get<Product[]>('assets/products.json');
  }

  /**
   * Create a new product
   * @param product 
   * @returns 
   */
  public createProduct(product: Product): Observable<Product[]> {
    const data = {
      "id": 0,
      "code": product.code,
      "name": product.name,
      "description": product.description,
      "price": product.price,
      "quantity": product.quantity,
      "inventoryStatus": product.inventoryStatus,
      "category": product.category,
      "image": product.image,
      "rating": product.rating
    }
    return this.http.post<Product[]>(
      `${environment.apiUrl}/${this.url}`,
      data
    );


    //return this.http.get<Product[]>('assets/products.json');
  }


}
