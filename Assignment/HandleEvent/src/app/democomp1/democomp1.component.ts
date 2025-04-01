import { Component } from '@angular/core';

@Component({
  selector: 'app-democomp1',
  imports: [],
  templateUrl: './democomp1.component.html',
  styleUrl: './democomp1.component.css'
})
export class Democomp1Component 
{
  public str = '';
  public DisplayData()
  {
    this.str = "From Display Data Function";
  }
}
