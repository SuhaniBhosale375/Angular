import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Textfeild2Component } from './textfeild2.component';

describe('Textfeild2Component', () => {
  let component: Textfeild2Component;
  let fixture: ComponentFixture<Textfeild2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Textfeild2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Textfeild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
