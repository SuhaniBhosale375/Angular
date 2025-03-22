import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Democomp1Component } from './democomp1/democomp1.component';
import { Democomp2Component } from './democomp2/democomp2.component';

@Component({
  selector: 'app-root',
  imports: [
    Democomp1Component,
    Democomp2Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo3';
}
