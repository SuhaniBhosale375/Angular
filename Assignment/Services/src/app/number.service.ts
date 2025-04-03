import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{

  public ChkPrime(no: number)
  {
      if(no % 2 == 0)
      {
        return [
          {"Result":no + " it is not prime number"}
        ];
      }
      else
      {
        return[
          {"Result": no +" it is a prime number "}
        ]
      }
  }
  constructor() { }
}
