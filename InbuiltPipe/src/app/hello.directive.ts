import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core';
import { HostListener } from '@angular/core';

@Directive({
  selector: '[appHello]'
})
export class HelloDirective {

  constructor(private eobj : ElementRef) { } 

  @HostListener('mouseenter')onMouseEnter()
  {
    this.eobj.nativeElement.style.backgroundColor='skyblue';
  }
  
  @HostListener('mouseleave')onMouseLeave()
  {
    this.eobj.nativeElement.style.background='deeppink';
  }

}
