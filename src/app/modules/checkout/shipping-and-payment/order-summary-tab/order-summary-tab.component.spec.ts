import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderSummaryTabComponent } from './order-summary-tab.component';

describe('OrderSummaryTabComponent', () => {
  let component: OrderSummaryTabComponent;
  let fixture: ComponentFixture<OrderSummaryTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderSummaryTabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderSummaryTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
