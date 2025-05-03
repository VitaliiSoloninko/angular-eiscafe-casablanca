import { Component } from '@angular/core';
import { ICE } from '../../data/ice';
import { IProduct } from '../../models/IProduct';
import { ProductItemComponent } from '../../products/product-item/product-item.component';
import { ProductListComponent } from '../../products/product-list/product-list.component';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-ice-page',
  imports: [ProductItemComponent, TitleComponent, ProductListComponent],
  templateUrl: './ice-page.component.html',
  styleUrl: './ice-page.component.scss',
})
export class IcePageComponent {
  ice: IProduct[] = ICE;
}
