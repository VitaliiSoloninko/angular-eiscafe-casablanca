import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageComponent } from './contact-page.component';

describe('ContactPageComponent', () => {
  let component: ContactPageComponent;
  let fixture: ComponentFixture<ContactPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display contact information', () => {
    const compiled = fixture.nativeElement as HTMLElement;

    const phoneLink = compiled.querySelector('a[href="tel:+49152235687"]');
    expect(phoneLink).toBeTruthy();
    expect(phoneLink?.textContent?.trim()).toBe('0152 - 235687');

    const emailLink = compiled.querySelector(
      'a[href="mailto:eiscafecasablanca@gmail.com"]'
    );
    expect(emailLink).toBeTruthy();
    expect(emailLink?.textContent?.trim()).toBe('eiscafecasablanca@gmail.com');
  });

  it('should display address', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const addressText = compiled.textContent;
    expect(addressText).toContain('Max-Suhrbier-Straße 61');
    expect(addressText).toContain('19059, Schwerin');
  });
});
