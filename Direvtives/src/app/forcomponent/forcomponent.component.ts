import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-forcomponent',
  imports: [NgFor],
  templateUrl: './forcomponent.component.html',
  styleUrl: './forcomponent.component.css'
})
export class ForcomponentComponent 
{
  public Student = ["Suhani","Mahi","Atul","Prachi","Ajay"];
}
