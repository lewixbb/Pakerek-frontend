import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketTabMiniComponent } from './basket-tab-mini.component';

describe('BasketTabMiniComponent', () => {
  let component: BasketTabMiniComponent;
  let fixture: ComponentFixture<BasketTabMiniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasketTabMiniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasketTabMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
