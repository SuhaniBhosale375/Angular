import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: 
  [
    Child1Component,
    Child2Component,
    NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo3';
}
