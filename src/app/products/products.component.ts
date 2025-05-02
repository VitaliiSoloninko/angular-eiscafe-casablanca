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
  price: number = 170 / 100;
  priceDrinks: number = 550 / 100;

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
    {
      id: 11,
      name: 'chocolate chip cookie',
      description: '',
      price: this.price,
      image: '/image/ice/chocolate-chip-cookie.jpeg',
    },
    {
      id: 12,
      name: 'pistachio',
      description: '',
      price: this.price,
      image: '/image/ice/pistachio.jpeg',
    },
    {
      id: 13,
      name: 'mango',
      description: '',
      price: this.price,
      image: '/image/ice/mango.jpeg',
    },
    {
      id: 14,
      name: 'fruit yogurt',
      description: '',
      price: this.price,
      image: '/image/ice/fruit-yogurt.jpeg',
    },
    {
      id: 15,
      name: 'dark chocolate',
      description: '',
      price: this.price,
      image: '/image/ice/dark-chocolate.jpeg',
    },
    {
      id: 16,
      name: 'cream',
      description: '',
      price: this.price,
      image: '/image/ice/cream.jpeg',
    },
    {
      id: 17,
      name: 'orange',
      description: '',
      price: this.price,
      image: '/image/ice/orange.jpeg',
    },
    {
      id: 18,
      name: 'strawberry',
      description: '',
      price: this.price,
      image: '/image/ice/strawberry.jpeg',
    },
    {
      id: 19,
      name: 'walnuts',
      description: '',
      price: this.price,
      image: '/image/ice/walnuts.jpeg',
    },
    {
      id: 20,
      name: 'milk chocolade',
      description: '',
      price: this.price,
      image: '/image/ice/milk-chocolade.jpeg',
    },
    {
      id: 21,
      name: 'white chocolade',
      description: '',
      price: this.price,
      image: '/image/ice/white-chocolate.jpeg',
    },
    {
      id: 22,
      name: 'lemonade',
      description: '',
      price: this.price,
      image: '/image/ice/lemonade.jpeg',
    },
    {
      id: 23,
      name: 'forest fruits',
      description: '',
      price: this.price,
      image: '/image/ice/forest-fruits.jpeg',
    },
    {
      id: 24,
      name: 'yogurt',
      description: '',
      price: this.price,
      image: '/image/ice/yogurt.jpeg',
    },
    {
      id: 25,
      name: 'apple',
      description: '',
      price: this.price,
      image: '/image/ice/apple.jpeg',
    },
    {
      id: 26,
      name: 'coffee',
      description: '',
      price: this.price,
      image: '/image/ice/coffee.jpeg',
    },
    {
      id: 27,
      name: 'hagelnut',
      description: '',
      price: this.price,
      image: '/image/ice/hagelnut.jpeg',
    },
    {
      id: 28,
      name: 'marshmallow',
      description: '',
      price: this.price,
      image: '/image/ice/marshmallow.jpeg',
    },
  ];

  drinks: IProduct[] = [
    {
      id: 1,
      name: 'avocado and banana',
      description: '123',
      price: this.priceDrinks,
      image: '/image/drinks/avocado-and-banana.jpg',
    },
    {
      id: 2,
      name: 'ananas',
      description: '123',
      price: this.priceDrinks,
      image: '/image/drinks/ananas.jpg',
    },
    {
      id: 3,
      name: 'kiwi',
      description: '123',
      price: this.priceDrinks,
      image: '/image/drinks/kiwi.jpg',
    },

    {
      id: 4,
      name: 'cucumber',
      description: '123',
      price: this.priceDrinks,
      image: '/image/drinks/cucumber.jpg',
    },
    {
      id: 5,
      name: 'strawberry',
      description: '123',
      price: this.priceDrinks,
      image: '/image/drinks/strawberry.jpg',
    },
    {
      id: 6,
      name: 'red-beet',
      description: '123',
      price: this.priceDrinks,
      image: '/image/drinks/red-beet.jpg',
    },
    {
      id: 7,
      name: 'orange',
      description: '123',
      price: this.priceDrinks,
      image: '/image/drinks/orange.jpg',
    },

    {
      id: 8,
      name: 'soda',
      description: '123',
      price: 170 / 100,
      image: '/image/drinks/soda.jpg',
    },
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
