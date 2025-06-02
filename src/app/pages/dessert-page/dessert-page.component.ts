import { Component } from '@angular/core';
import { DESERTS } from '../../data/deserts';
import { HOT_DRINKS, TEA } from '../../data/drinks';
import { IProduct } from '../../models/IProduct';
import { ProductListComponent } from '../../products/product-list/product-list.component';
import { TitleComponent } from '../../title/title.component';
import { ProductModalComponent } from '../../products/product-modal/product-modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dessert-page',
  imports: [
    TitleComponent,
    ProductListComponent,
    ProductModalComponent,
    CommonModule,
  ],
  templateUrl: './dessert-page.component.html',
  styleUrl: './dessert-page.component.scss',
})
export class DessertPageComponent {
  deserts: IProduct[] = DESERTS;
  hotDrinks: IProduct[] = HOT_DRINKS;
  tea: IProduct[] = TEA;

  selectedProduct: IProduct | null = null;

  openModal(product: IProduct) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }
}
