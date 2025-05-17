import { Component } from '@angular/core';
import { DESERTS } from '../../data/deserts';
import { HOT_DRINKS } from '../../data/drinks';
import { IProduct } from '../../models/IProduct';
import { ProductListComponent } from '../../products/product-list/product-list.component';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-dessert-page',
  imports: [TitleComponent, ProductListComponent],
  templateUrl: './dessert-page.component.html',
  styleUrl: './dessert-page.component.scss',
})
export class DessertPageComponent {
  deserts: IProduct[] = DESERTS;

  hotDrinks: IProduct[] = HOT_DRINKS;
}
