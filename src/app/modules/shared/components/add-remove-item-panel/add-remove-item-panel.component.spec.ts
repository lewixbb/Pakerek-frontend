import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRemoveItemPanelComponent } from './add-remove-item-panel.component';

describe('AddRemoveItemPanelComponent', () => {
  let component: AddRemoveItemPanelComponent;
  let fixture: ComponentFixture<AddRemoveItemPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRemoveItemPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRemoveItemPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
