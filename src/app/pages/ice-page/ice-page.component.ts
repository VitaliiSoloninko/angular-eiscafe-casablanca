import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ICE } from '../../data/ice';
import { IProduct } from '../../models/IProduct';
import { ProductListComponent } from '../../products/product-list/product-list.component';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-ice-page',
  imports: [TitleComponent, ProductListComponent, CurrencyPipe, CommonModule],
  templateUrl: './ice-page.component.html',
  styleUrl: './ice-page.component.scss',
})
export class IcePageComponent {
  ice: IProduct[] = ICE;
  selectedProduct: IProduct | null = null;

  openModal(product: IProduct) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }
}
