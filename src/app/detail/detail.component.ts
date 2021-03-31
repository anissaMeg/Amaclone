import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { ProductModel, PRODUCT_LIST } from '../product-model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  
  public product:ProductModel|null = null;

  constructor( 
    private route:ActivatedRoute, 
    private catalogService:CatalogService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( 
      (map:ParamMap) => {
        const str:string|null = map.get("id");
        if( str === null )
          return;

        const id:number = parseInt(str);
        this.product = this.catalogService.getById(id);
      }
    );
  }

}
