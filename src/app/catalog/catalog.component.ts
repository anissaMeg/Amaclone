import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { ProductModel, PRODUCT_LIST } from '../product-model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {


  public products:ProductModel[] = [];
  

  constructor( private catalogService:CatalogService ) { 
  }

  ngOnInit(): void {
    this.catalogService.getAll().subscribe( 
      (products:ProductModel[]) => {
        this.products = products;
      }
    );
  }

}
