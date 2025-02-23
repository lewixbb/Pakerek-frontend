import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCodeControlComponent } from './post-code-control.component';

describe('PostCodeControlComponent', () => {
  let component: PostCodeControlComponent;
  let fixture: ComponentFixture<PostCodeControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCodeControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostCodeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
