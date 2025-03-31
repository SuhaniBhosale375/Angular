import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithematicService {


  public Addition(No1:number,No2:number)
  {
    return No1 + No2;
  }
  public Substraction(No1:number,No2:number)
  {
    return No1 - No2;
  }
  constructor() { }
}
