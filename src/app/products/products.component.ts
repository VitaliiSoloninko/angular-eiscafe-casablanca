import { Component, OnInit } from '@angular/core';
import { IProduct } from '../models/IProduct';
import { TitleComponent } from '../title/title.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-products',
  imports: [ProductItemComponent, ProductListComponent, TitleComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  price: number = 2;

  ice: IProduct[] = [
    {
      id: 1,
      name: 'vanilla',
      description: '',
      price: this.price,
      image: '/image/ice/vanilla.jpeg',
    },
    {
      id: 2,
      name: 'lime',
      description: '',
      price: this.price,
      image: '/image/ice/lime.jpeg',
    },
    {
      id: 3,
      name: 'coconut',
      description: '',
      price: this.price,
      image: '/image/ice/coconut.jpeg',
    },
    {
      id: 4,
      name: 'mint & chocolate',
      description: '',
      price: this.price,
      image: '/image/ice/mint-chocolate.jpeg',
    },
    {
      id: 5,
      name: 'almond',
      description: '',
      price: this.price,
      image: '/image/ice/almond.jpeg',
    },
    {
      id: 6,
      name: 'chocolate',
      description: '',
      price: this.price,
      image: '/image/ice/chocolate.jpeg',
    },
    {
      id: 7,
      name: 'cream cookie',
      description: '',
      price: this.price,
      image: '/image/ice/cream-cookie.jpeg',
    },
    {
      id: 8,
      name: 'blueberry',
      description: '',
      price: this.price,
      image: '/image/ice/blueberry.jpeg',
    },
    {
      id: 9,
      name: 'red currant',
      description: '',
      price: this.price,
      image: '/image/ice/red-currant.jpeg',
    },
    {
      id: 10,
      name: 'chocolate truffle',
      description: '',
      price: this.price,
      image: '/image/ice/chocolate-truffle.jpeg',
    },
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
