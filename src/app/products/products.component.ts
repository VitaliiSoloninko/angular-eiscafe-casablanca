import { Component } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { TitleComponent } from '../title/title.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-products',
  imports: [ProductListComponent, TitleComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  foods: IProduct[] = [
    {
      id: 1,
      name: 'food 1',
      description: '123',
      price: 300 / 100,
      image: '/image/cocktails/avocado-and-banana.jpg',
    },
    {
      id: 2,
      name: 'food 2',
      description: '123',
      price: 300 / 100,
      image: '/image/cocktails/avocado-and-banana.jpg',
    },
    {
      id: 3,
      name: 'food 3',
      description: '123',
      price: 300 / 100,
      image: '/image/cocktails/avocado-and-banana.jpg',
    },
  ];
}
