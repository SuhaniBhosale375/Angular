import { Component } from '@angular/core';
import { HelloDirective } from './hello.directive';
@Component({
  selector: 'app-root',
  imports: [
    
      HelloDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PipeDemo';
}
