import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-bt-number',
  templateUrl: './between.number.component.html',
  styleUrls: ['./between.number.component.css']
})
export class BetweenNumberComponent {

  @Input() label: string;

  @Input() placeholderFrom: string;

  @Input() placeholderTo: string;

  @Input()
  public valueFrom: number;

  @Input()
  public valueTo: number;

  @Input()
  public idFrom: string;

  @Input()
  public idTo: string;

  @Input()
  public nameFrom: string;

  @Input()
  public nameTo: string;

  @Output()
  public bindFrom: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public bindTo: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  onEventFrom(event) {
    this.bindFrom.emit(event.target.value);
  }

  onEventTo(event) {
    this.bindTo.emit(event.target.value);
  }

}
