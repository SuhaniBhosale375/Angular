import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComp1Component } from './first-comp1.component';

describe('FirstComp1Component', () => {
  let component: FirstComp1Component;
  let fixture: ComponentFixture<FirstComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstComp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
