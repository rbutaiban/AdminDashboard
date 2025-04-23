import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  LoadProducts() {
    return this.http.get<Product[]>("http://localhost:3000/PRODUCTS");
  }
}
