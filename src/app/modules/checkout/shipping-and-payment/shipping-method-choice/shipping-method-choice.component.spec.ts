import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingMethodChoiceComponent } from './shipping-method-choice.component';

describe('ShippingMethodChoiceComponent', () => {
  let component: ShippingMethodChoiceComponent;
  let fixture: ComponentFixture<ShippingMethodChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingMethodChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingMethodChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
