import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { COLD_DRINKS } from '../../data/drinks';
import { IProduct } from '../../models/IProduct';
import { ProductListComponent } from '../../products/product-list/product-list.component';
import { ProductModalComponent } from '../../products/product-modal/product-modal.component';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-drink-page',
  imports: [
    TitleComponent,
    ProductListComponent,
    ProductModalComponent,
    CommonModule,
  ],
  templateUrl: './drink-page.component.html',
  styleUrl: './drink-page.component.scss',
})
export class DrinkPageComponent {
  coldDrinks: IProduct[] = COLD_DRINKS;
  selectedProduct: IProduct | null = null;

  openModal(product: IProduct) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }
}
