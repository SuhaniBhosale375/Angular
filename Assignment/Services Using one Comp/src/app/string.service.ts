import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{
 
  public CountCapital (str : any)
  {
    let count : number = 0;

    for(let i = 0; i < str.length; i++)
    {
      if(str[i] >= 'A' && str[i] <= 'Z')
      {
        count++
      }
    }
    return count;
  }
  
  constructor() { }
}
