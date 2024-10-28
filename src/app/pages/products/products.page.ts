import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/shared/services/product.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  url = environment.apiUrl;

  msgError = '';

  productList = [];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id_product_category = params['id_product_category'];

      if (!params['id_product_category']) {
        this.getProductListDefault();
        return;
      }

      this.getProductList(id_product_category);
    });
  }

  getImageUrl(nameImage: string): string {
    console.log('`${this.url}/uploads/${nameImage}`', `${this.url}/uploads/${nameImage}`)
    return `${this.url}/uploads/${nameImage}`;
  }
  get imageUrl(): (nameImage: string) => string {
    return (nameImage: string) => `${this.url}/uploads/${nameImage}`;
  }

  private getProductList(id_product_category: number): void {
    this.productsService.getProduct(false, id_product_category).subscribe(
      (data) => {
        this.productList = data.response;
        this.msgError = '';
      },
      (error) => {
        console.error('Erro ao listar produtos:', error);
        this.msgError = error?.error?.message || 'Erro ao listar produtos';
        this.dismissError();
        this.getProductListDefault();
      }
    );
  }

  private getProductListDefault(): void {
    this.productsService.getProduct(false).subscribe((data) => {
      this.productList = data.response;
      console.log('this.productList', this.productList);
    });
  }

  private dismissError(): void {
    setTimeout(() => {
      this.msgError = '';
    }, 3000);
  }
}
