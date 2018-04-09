import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent {

  @Input()
  public label: string;

  @Input()
  public placeholder: string;

  @Input()
  public value: string;

  @Input()
  public inputID: string;

  @Input()
  public inputName: string;

  @Output()
  public bind: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onEvent(event) {
    this.bind.emit(event.target.value);
  }

}
