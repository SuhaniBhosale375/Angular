import { Component ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Output() Myevent = new EventEmitter();

  public value:any;  
  public Send(data : any)
  {
    this.value = data;
    this.Myevent.emit(this.value);
  }
}
