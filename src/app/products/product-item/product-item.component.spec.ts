import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItemComponent } from './product-item.component';
import { IProduct } from '../../models/IProduct';

describe('ProductItemComponent', () => {
  let component: ProductItemComponent;
  let fixture: ComponentFixture<ProductItemComponent>;

  const mockProduct: IProduct = {
    id: 1,
    name: 'Test Ice Cream',
    description: 'Delicious test ice cream',
    price: 2.5,
    image: '/test-image.jpg',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductItemComponent);
    component = fixture.componentInstance;
    component.product = mockProduct;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display product information', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    // Check product name
    expect(compiled.textContent).toContain('TEST ICE CREAM');

    // Check price in EUR format
    expect(compiled.textContent).toContain('€2.50');

    // Check image
    const img = compiled.querySelector('img') as HTMLImageElement;
    expect(img).toBeTruthy();
    expect(img.src).toContain('/test-image.jpg');
    expect(img.alt).toBe('Image');
  });

  it('should handle product input changes', () => {
    const newProduct: IProduct = {
      id: 2,
      name: 'New Product',
      description: 'New description',
      price: 5.0,
      image: '/new-image.jpg',
    };

    component.product = newProduct;
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('NEW PRODUCT');
    expect(compiled.textContent).toContain('€5.00');
  });
});
