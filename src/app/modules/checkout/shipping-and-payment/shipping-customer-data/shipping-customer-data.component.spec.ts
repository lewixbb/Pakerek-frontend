import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingCustomerDataComponent } from './shipping-customer-data.component';

describe('ShippingCustomerDataComponent', () => {
  let component: ShippingCustomerDataComponent;
  let fixture: ComponentFixture<ShippingCustomerDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingCustomerDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShippingCustomerDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
