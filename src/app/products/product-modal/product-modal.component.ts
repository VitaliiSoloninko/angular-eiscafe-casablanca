import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../models/IProduct';

@Component({
  selector: 'app-product-modal',
  imports: [CommonModule],
  templateUrl: './product-modal.component.html',
  styleUrl: './product-modal.component.scss',
})
export class ProductModalComponent {
  @Input() product: IProduct | null = null;
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
