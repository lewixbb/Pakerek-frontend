import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIntoBasketComponent } from './add-into-basket.component';

describe('AddIntoBasketComponent', () => {
  let component: AddIntoBasketComponent;
  let fixture: ComponentFixture<AddIntoBasketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIntoBasketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIntoBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
