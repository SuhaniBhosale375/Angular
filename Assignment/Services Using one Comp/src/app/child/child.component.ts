import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [NgFor],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  
  public bRet : any;
  public count : any;

  constructor(private _obj1 : NumberService,private _obj2 : StringService)
  {

  }

  ngOnInit(): void {
    
    this.bRet = this._obj1.ChkPrime(7);
    this.count = this._obj2.CountCapital("Hello World");
  }
}
