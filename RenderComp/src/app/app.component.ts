import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirstCompComponent } from './first-comp/first-comp.component';
import { FirstComp1Component } from './first-comp1/first-comp1.component';
import { SecComp1Component } from './sec-comp1/sec-comp1.component';
import { FirstComp2Component } from './first-comp2/first-comp2.component';

@Component({
  selector: 'app-root',
  imports: 
  [
    FirstCompComponent,
    FirstComp1Component,
    SecComp1Component,
    FirstComp2Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo';
}
