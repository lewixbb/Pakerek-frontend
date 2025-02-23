import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedProductsListComponent } from './ordered-products-list.component';

describe('OrderedProductsListComponent', () => {
  let component: OrderedProductsListComponent;
  let fixture: ComponentFixture<OrderedProductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderedProductsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderedProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
