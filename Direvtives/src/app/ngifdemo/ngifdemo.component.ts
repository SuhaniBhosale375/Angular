import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ngifdemo',
  imports: [NgIf],
  templateUrl: './ngifdemo.component.html',
  styleUrl: './ngifdemo.component.css'
})
export class NgifdemoComponent {
  public flag = true;
  public Food = true;
  
}
