import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bt-date',
  templateUrl: './between.date.component.html',
  styleUrls: ['./between.date.component.css']
})
export class BetweenDateComponent {

  @Input()
  public label: string;

  @Input()
  public placeholderFrom: string;

  @Input()
  public placeholderTo: string;

  @Input()
  public valueFrom: Date;

  @Input()
  public valueTo: Date;

  @Input()
  public idFrom: string;

  @Input()
  public idTo: string;

  @Input()
  public nameFrom: string;

  @Input()
  public nameTo: string;

  @Output()
  public bindFrom: EventEmitter<Date> = new EventEmitter<Date>();

  @Output()
  public bindTo: EventEmitter<Date> = new EventEmitter<Date>();

  constructor() { }

  onEventFrom(event) {
    this.bindFrom.emit(event.target.value);
  }

  onEventTo(event) {
    this.bindTo.emit(event.target.value);
  }

}
