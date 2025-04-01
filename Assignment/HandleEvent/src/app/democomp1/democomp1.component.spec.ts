import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Democomp1Component } from './democomp1.component';

describe('Democomp1Component', () => {
  let component: Democomp1Component;
  let fixture: ComponentFixture<Democomp1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Democomp1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Democomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
