import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  imports: [ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo3';
// Parent o child 
  public Msg1 : String = "Hello Child";

// Child to Parent
  public Data2:any;
  public Str : String = '';
}

