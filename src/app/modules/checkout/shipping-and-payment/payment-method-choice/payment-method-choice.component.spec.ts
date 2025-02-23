import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodChoiceComponent } from './payment-method-choice.component';

describe('PaymentMethodChoiceComponent', () => {
  let component: PaymentMethodChoiceComponent;
  let fixture: ComponentFixture<PaymentMethodChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaymentMethodChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
