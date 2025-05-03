import { Component } from '@angular/core';
import { DESERTS } from '../../data/deserts';
import { IProduct } from '../../models/IProduct';
import { ProductItemComponent } from '../../products/product-item/product-item.component';
import { ProductListComponent } from '../../products/product-list/product-list.component';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-dessert-page',
  imports: [ProductItemComponent, TitleComponent, ProductListComponent],
  templateUrl: './dessert-page.component.html',
  styleUrl: './dessert-page.component.scss',
})
export class DessertPageComponent {
  deserts: IProduct[] = DESERTS;
}
