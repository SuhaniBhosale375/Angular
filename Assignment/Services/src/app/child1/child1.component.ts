import { Component, OnInit } from '@angular/core';
import { NumberService } from '../number.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-child1',
  imports: [NgFor],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component implements OnInit
{
  public bRet : any;

  constructor(private _obj : NumberService)
  {

  }

  ngOnInit(): void {
    
    this.bRet = this._obj.ChkPrime(7);
  }
}
