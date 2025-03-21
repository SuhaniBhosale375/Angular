import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFeildComponent } from './text-feild.component';

describe('TextFeildComponent', () => {
  let component: TextFeildComponent;
  let fixture: ComponentFixture<TextFeildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFeildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFeildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
