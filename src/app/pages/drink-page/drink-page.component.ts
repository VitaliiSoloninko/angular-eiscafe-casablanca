import { Component } from '@angular/core';
import { COCKTAILS } from '../../data/drinks';
import { IProduct } from '../../models/IProduct';
import { ProductItemComponent } from '../../products/product-item/product-item.component';
import { ProductListComponent } from '../../products/product-list/product-list.component';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-drink-page',
  imports: [TitleComponent, ProductListComponent],
  templateUrl: './drink-page.component.html',
  styleUrl: './drink-page.component.scss',
})
export class DrinkPageComponent {
  cocktails: IProduct[] = COCKTAILS;
}
