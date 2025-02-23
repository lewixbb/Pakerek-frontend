import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonFormControlComponent } from './person-form-control.component';

describe('PersonFormControlComponent', () => {
  let component: PersonFormControlComponent;
  let fixture: ComponentFixture<PersonFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonFormControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
