import { Component, OnInit } from '@angular/core';
import { ArithematicService } from '../arithematic.service';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent implements OnInit
{
  public Add : number = 0;
  public Sub : number = 0;

  constructor(private _obj : ArithematicService)
  {

  }

  ngOnInit(): void {
    this.Add = this. _obj.Addition(10 , 20);
    this.Sub = this. _obj.Substraction(20, 5);
  }

}
