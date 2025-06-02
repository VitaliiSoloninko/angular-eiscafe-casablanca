import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ICE } from '../../data/ice';
import { IProduct } from '../../models/IProduct';
import { ProductListComponent } from '../../products/product-list/product-list.component';
import { ProductModalComponent } from '../../products/product-modal/product-modal.component';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-ice-page',
  imports: [
    TitleComponent,
    ProductListComponent,
    CommonModule,
    ProductModalComponent,
  ],
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
