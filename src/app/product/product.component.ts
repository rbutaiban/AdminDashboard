import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../model/product';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { CategoryPipe } from '../pipes/category.pipe';
import { RatingPipe } from '../pipes/rating.pipe';
import { TagsPipe } from '../pipes/tags.pipe';
import { ProductsStatusPipe } from '../pipes/products-status.pipe';
import { LayoutComponent } from "../layout/layout.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [HttpClientModule, DatePipe, CurrencyPipe, CategoryPipe, RatingPipe, TagsPipe, ProductsStatusPipe, LayoutComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit{

  productList!: Product[];

  constructor(private service: ProductsService){

  }

  ngOnInit(): void {
    this.LoadProducts();
  }

  LoadProducts(){
    this.service.LoadProducts().subscribe(item=>{
      this.productList=item;
    })
  }

}
