import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {

  @Input() label: string;

  @Input() placeholder: string;

  @Input()
  public value: number;

  @Input()
  public inputID: string;

  @Input()
  public inputName: string;

  @Output()
  public bind: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  onEvent(event) {
    this.bind.emit(event.target.value);
  }

}
