import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextFeildComponent } from './text-feild/text-feild.component';
import { TextFeild1Component } from './text-feild1/text-feild1.component';
import { Textfeild2Component } from './textfeild2/textfeild2.component';

@Component({
  selector: 'app-root',
  imports: 
  
  [
    TextFeildComponent,
    TextFeild1Component,
    Textfeild2Component,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Demo';
}
