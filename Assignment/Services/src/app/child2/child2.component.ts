import { Component, OnInit } from '@angular/core';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component implements OnInit
{
  public cnt : any= 0
  constructor(private _obj : StringService)
  {

  }

  ngOnInit(): void{
   this.cnt = this. _obj.CountCapital("Hello World");
  }

}
