import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductModel, PRODUCT_LIST } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor( private client:HttpClient ) { }

  public getAll():Observable<ProductModel[]>{
    return this.client.get<ProductModel[]>("/assets/data/products.json");
    // return of(PRODUCT_LIST);
  }

  public getById( id:number ):Observable<ProductModel | null> {
    return this.getAll().pipe( 
      map( 
        (products:ProductModel[]) => {
          return products.find( p => p.id === id) || null;
        }
      )
    );
  }

}
