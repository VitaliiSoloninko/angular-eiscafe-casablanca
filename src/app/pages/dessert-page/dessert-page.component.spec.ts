import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DessertPageComponent } from './dessert-page.component';

describe('DessertPageComponent', () => {
  let component: DessertPageComponent;
  let fixture: ComponentFixture<DessertPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DessertPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DessertPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
