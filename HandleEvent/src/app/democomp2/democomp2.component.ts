import { Component } from '@angular/core';

@Component({
  selector: 'app-democomp2',
  imports: [],
  templateUrl: './democomp2.component.html',
  styleUrl: './democomp2.component.css'
})
export class Democomp2Component {
  
  public str : String = 'Suhani Bhosale';

  public UpperCase()
  {
    this.str = this.str.toUpperCase();
  }
  public LowerCase()
  {
    this.str = this.str.toLowerCase();
  }
}
