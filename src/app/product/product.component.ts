import { Component, Input, OnInit } from '@angular/core';
import { ProductModel } from '../product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  public data:ProductModel|null = null;

  @Input()
  public preview:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
