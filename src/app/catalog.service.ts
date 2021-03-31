import { Injectable } from '@angular/core';
import { ProductModel, PRODUCT_LIST } from './product-model';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  public getAll():ProductModel[]{
    return PRODUCT_LIST;
  }

  public getById( id:number ):ProductModel | null {
    return this.getAll().find( p => p.id === id ) || null;
  }

}
