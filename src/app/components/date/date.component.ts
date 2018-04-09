import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent {

  @Input()
  public label: string;

  @Input()
  public placeholder: string;

  @Input()
  public value: Date;

  @Input()
  public inputID: string;

  @Input()
  public inputName: string;

  @Output()
  public bind: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() { }

  onEvent(event) {
    this.bind.emit(event.target.value);
  }

}
