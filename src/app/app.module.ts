import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePage } from './pages/home/home.page';
import { ProductsPage } from './pages/products/products.page';
import { TitleComponent } from './components/title/title.component';
import { CardSelectCategoryComponent } from './components/card-select-category/card-select-category.component';
import { BannerPromoComponent } from './components/banner-promo/banner-promo.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { SearchProductComponent } from './components/search-product/search-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ProductsPage,
    TitleComponent,
    CardSelectCategoryComponent,
    BannerPromoComponent,
    CardProductComponent,
    SearchProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
