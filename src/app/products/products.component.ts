import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-products',
  imports: [ProductItemComponent, ProductListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  ice: IProduct[] = [
    { id: 1, name: 'ice 1', description: '123', price: 200, image: '1' },
    { id: 2, name: 'ice 2', description: '123', price: 200, image: '1' },
    { id: 3, name: 'ice 3', description: '123', price: 200, image: '1' },
  ];

  drinks: IProduct[] = [
    { id: 1, name: 'drink 1', description: '123', price: 200, image: '1' },
    { id: 2, name: 'drink 2', description: '123', price: 200, image: '1' },
    { id: 3, name: 'drink 3', description: '123', price: 200, image: '1' },
  ];

  foods: IProduct[] = [
    { id: 1, name: 'food 1', description: '123', price: 200, image: '1' },
    { id: 2, name: 'food 2', description: '123', price: 200, image: '1' },
    { id: 3, name: 'food 3', description: '123', price: 200, image: '1' },
  ];
  cocktails: IProduct[] = [
    { id: 1, name: 'cocktail 1', description: '123', price: 200, image: '1' },
    { id: 2, name: 'cocktail 2', description: '123', price: 200, image: '1' },
    { id: 3, name: 'cocktail 3', description: '123', price: 200, image: '1' },
  ];

  ngOnInit(): void {}
}
