import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketItemListMiniComponent } from './basket-item-list-mini.component';

describe('BasketItemListMiniComponent', () => {
  let component: BasketItemListMiniComponent;
  let fixture: ComponentFixture<BasketItemListMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketItemListMiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketItemListMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
