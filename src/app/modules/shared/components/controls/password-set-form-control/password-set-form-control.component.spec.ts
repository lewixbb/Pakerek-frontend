import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordSetFormControlComponent } from './password-set-form-control.component';

describe('PasswordSetFormControlComponent', () => {
  let component: PasswordSetFormControlComponent;
  let fixture: ComponentFixture<PasswordSetFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordSetFormControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PasswordSetFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
