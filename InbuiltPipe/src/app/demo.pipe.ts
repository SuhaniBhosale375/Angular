import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'demo'
})
export class DemoPipe implements PipeTransform 
{



  //<h2>{{"Subjects" | demo : "Maths":"Physics":"Chemistry"}}</h2>

  transform(value: unknown, ...args: unknown[]): unknown 
  {
    var str:string = '';
    
    if(args[0] == "Maths")   
    {
      str = "Teached by this "+value+" is Arun Chavan Sir"
    } 

    return str;
  }

}
