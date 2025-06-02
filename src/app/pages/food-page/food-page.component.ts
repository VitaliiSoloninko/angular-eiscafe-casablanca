import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FOODS } from '../../data/foods';
import { IProduct } from '../../models/IProduct';
import { ProductListComponent } from '../../products/product-list/product-list.component';
import { ProductModalComponent } from '../../products/product-modal/product-modal.component';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-food-page',
  imports: [
    TitleComponent,
    ProductListComponent,
    ProductModalComponent,
    CommonModule,
  ],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss',
})
export class FoodPageComponent {
  foods: IProduct[] = FOODS;
  selectedProduct: IProduct | null = null;

  openModal(product: IProduct) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }
}
