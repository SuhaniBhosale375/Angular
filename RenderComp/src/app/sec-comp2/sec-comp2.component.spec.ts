import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecComp2Component } from './sec-comp2.component';

describe('SecComp2Component', () => {
  let component: SecComp2Component;
  let fixture: ComponentFixture<SecComp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecComp2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecComp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
