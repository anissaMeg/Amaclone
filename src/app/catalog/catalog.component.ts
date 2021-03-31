import { Component, OnInit } from '@angular/core';
import { ProductModel, PRODUCT_LIST } from '../product-model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {


  public products:ProductModel[] = PRODUCT_LIST;

  constructor() { }

  ngOnInit(): void {
  }

}
