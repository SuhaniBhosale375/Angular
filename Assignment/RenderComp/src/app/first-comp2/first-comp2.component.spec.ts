import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComp2Component } from './first-comp2.component';

describe('FirstComp2Component', () => {
  let component: FirstComp2Component;
  let fixture: ComponentFixture<FirstComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstComp2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
