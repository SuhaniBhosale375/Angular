import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
 
  // child to parent
  @Input() public Data1 :any;

  // Parent to child
  @Output() Myevent = new EventEmitter()

  public Msg2  : String = "Hello Parent";

  public SendMsg()
  {
    this.Myevent.emit(this.Msg2);
  }
}
