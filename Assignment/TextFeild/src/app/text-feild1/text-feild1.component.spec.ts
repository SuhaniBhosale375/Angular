import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFeild1Component } from './text-feild1.component';

describe('TextFeild1Component', () => {
  let component: TextFeild1Component;
  let fixture: ComponentFixture<TextFeild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFeild1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFeild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
