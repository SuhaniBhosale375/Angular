import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForcomponentComponent } from './forcomponent.component';

describe('ForcomponentComponent', () => {
  let component: ForcomponentComponent;
  let fixture: ComponentFixture<ForcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
