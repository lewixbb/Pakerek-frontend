import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { Product, ProductResponse } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  apiUrl = environment.apiUrl;

  getProduct(id: number): Observable<Product> {
    return this.http.get<ProductResponse>(`${this.apiUrl}/products/${id}`);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<ProductResponse[]>(`${this.apiUrl}/products`);
  }
}
