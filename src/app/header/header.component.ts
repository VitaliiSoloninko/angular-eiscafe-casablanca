import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  openMenu = false;

  menuItems = [
    {
      name: 'Eis',
      link: 'ice',
    },
    {
      name: 'Getränke',
      link: 'drink',
    },
    {
      name: 'Nachtisch',
      link: 'desert',
    },
    {
      name: 'Essen',
      link: 'food',
    },
    {
      name: 'Kontakte',
      link: 'contact',
    },
  ];
}
