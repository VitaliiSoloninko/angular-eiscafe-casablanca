import { IProduct } from '../models/IProduct';

export const price = 550 / 100;
export const COLD_DRINKS: IProduct[] = [
  {
    id: 1,
    name: 'avocado and banana',
    description: '123',
    price: price,
    image: '/image/drinks/avocado-and-banana.jpg',
  },
  {
    id: 2,
    name: 'ananas',
    description: '123',
    price: price,
    image: '/image/drinks/ananas.jpg',
  },
  {
    id: 3,
    name: 'kiwi',
    description: '123',
    price: price,
    image: '/image/drinks/kiwi.jpg',
  },

  {
    id: 4,
    name: 'cucumber',
    description: '123',
    price: price,
    image: '/image/drinks/cucumber.jpg',
  },
  {
    id: 5,
    name: 'strawberry',
    description: '123',
    price: price,
    image: '/image/drinks/strawberry.jpg',
  },
  {
    id: 6,
    name: 'red-beet',
    description: '123',
    price: price,
    image: '/image/drinks/red-beet.jpg',
  },
  {
    id: 7,
    name: 'orange',
    description: '123',
    price: price,
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

export const HOT_DRINKS: IProduct[] = [
  {
    id: 1,
    name: 'coffee',
    description: '',
    price: 300 / 100,
    image: '/image/drinks/coffee.jpg',
  },
  {
    id: 2,
    name: 'cappuccino',
    description: '',
    price: 300 / 100,
    image: '/image/drinks/cappuccino.jpg',
  },
  {
    id: 3,
    name: 'coffee with milk',
    description: '',
    price: 300 / 100,
    image: '/image/drinks/coffee-with-milk.jpg',
  },
  {
    id: 4,
    name: 'tea',
    description: '',
    price: 300 / 100,
    image: '/image/drinks/tea.jpg',
  },
];
