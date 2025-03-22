import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Democomp2Component } from './democomp2.component';

describe('Democomp2Component', () => {
  let component: Democomp2Component;
  let fixture: ComponentFixture<Democomp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Democomp2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Democomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
