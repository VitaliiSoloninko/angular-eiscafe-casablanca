import { Component } from '@angular/core';
import { COLD_DRINKS, HOT_DRINKS } from '../../data/drinks';
import { IProduct } from '../../models/IProduct';
import { ProductListComponent } from '../../products/product-list/product-list.component';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-drink-page',
  imports: [TitleComponent, ProductListComponent],
  templateUrl: './drink-page.component.html',
  styleUrl: './drink-page.component.scss',
})
export class DrinkPageComponent {
  coldDrinks: IProduct[] = COLD_DRINKS;
  hotDrinks: IProduct[] = HOT_DRINKS;
}
