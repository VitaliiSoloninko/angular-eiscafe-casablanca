import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcePageComponent } from './ice-page.component';

describe('IcePageComponent', () => {
  let component: IcePageComponent;
  let fixture: ComponentFixture<IcePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IcePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IcePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
