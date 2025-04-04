import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForcomponentComponent } from './forcomponent/forcomponent.component';
import { NgifdemoComponent } from './ngifdemo/ngifdemo.component';
import { SwitchdemoComponent } from './switchdemo/switchdemo.component';
@Component({
  selector: 'app-root',
  imports: [ForcomponentComponent,NgifdemoComponent,SwitchdemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'S_Directives';
}
