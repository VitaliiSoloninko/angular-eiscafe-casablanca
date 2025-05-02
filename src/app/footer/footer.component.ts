import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  CakeSlice,
  CupSoda,
  Hamburger,
  IceCreamCone,
  LucideAngularModule,
  MapPinned,
} from 'lucide-angular';

@Component({
  selector: 'app-footer',
  imports: [LucideAngularModule, RouterLink, NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  iceCreamCone: any = IceCreamCone;
  cupSoda: any = CupSoda;
  cakeSlice = CakeSlice;
  hamburger: any = Hamburger;
  mapPinned: any = MapPinned;
}
