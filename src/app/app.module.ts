import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CatalogComponent,
    HomeComponent,
    DetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule, 
    RouterModule.forRoot( 
      // tableau de routes
      [
        {
          component: CatalogComponent, 
          path: "catalog"
        }, 
        {
          component: HomeComponent, 
          path: "home"
        },
        {
          component: DetailComponent, 
          path: "detail/:id"
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
