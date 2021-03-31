import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductModel, PRODUCT_LIST } from '../product-model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private route:ActivatedRoute;
  public product:ProductModel|null = null;

  constructor( param_route:ActivatedRoute ) { 
    this.route = param_route;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe( 
      (map:ParamMap) => {
        const str:string|null = map.get("id");
        if( str === null )
          return;

        const id:number = parseInt(str);
        // for( let i:number = 0; i < PRODUCT_LIST.length; i++ ){
        //   if( PRODUCT_LIST[i].id === id )
        //     this.product = PRODUCT_LIST[i];
        // }

        this.product = PRODUCT_LIST.find( p => p.id === id ) || null;
      }
    )
  }

}
