import { Component } from '@angular/core';
import { FOODS } from '../../data/foods';
import { IProduct } from '../../models/IProduct';
import { ProductListComponent } from '../../products/product-list/product-list.component';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-food-page',
  imports: [TitleComponent, ProductListComponent],
  templateUrl: './food-page.component.html',
  styleUrl: './food-page.component.scss',
})
export class FoodPageComponent {
  foods: IProduct[] = FOODS;
}
