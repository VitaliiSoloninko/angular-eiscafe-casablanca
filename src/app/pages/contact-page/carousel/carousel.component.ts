import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TuiButton } from '@taiga-ui/core';
import { TuiCarousel, TuiPagination } from '@taiga-ui/kit';

@Component({
  selector: 'app-carousel',
  imports: [NgFor, TuiCarousel, TuiPagination, TuiButton, TuiCarousel],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent {
  protected index = 0;

  protected readonly items = [
    '01.jpeg',
    '02.jpeg',
    '03.jpeg',
    '04.jpeg',
    '05.jpeg',
    '06.jpeg',
    '07.jpeg',
    '08.jpeg',
    '09.jpeg',
    '10.jpeg',
    '11.jpeg',
  ];
}
