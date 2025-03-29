import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecComp1Component } from './sec-comp1.component';

describe('SecComp1Component', () => {
  let component: SecComp1Component;
  let fixture: ComponentFixture<SecComp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecComp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecComp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
