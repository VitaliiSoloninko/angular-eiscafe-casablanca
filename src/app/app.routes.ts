import { Routes } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { DessertPageComponent } from './pages/dessert-page/dessert-page.component';
import { DrinkPageComponent } from './pages/drink-page/drink-page.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { IcePageComponent } from './pages/ice-page/ice-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'ice', pathMatch: 'full' },
  { path: 'ice', component: IcePageComponent },
  { path: 'drink', component: DrinkPageComponent },
  { path: 'desert', component: DessertPageComponent },
  { path: 'food', component: FoodPageComponent },
  { path: 'contact', component: ContactPageComponent },
];
