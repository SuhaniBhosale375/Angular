import { CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoPipe } from './demo.pipe';

@Component({
  selector: 'app-root',
  imports: [
    DemoPipe
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PipeDemo';

  public name = "SUHANI rajendra bhosale";

  public Batch = {"name" : "Web development", "Duration" : 3, "Fees" : 4500};

  public today = new Date();

  public no = 9.456;

  public Fees = 13000;
}
