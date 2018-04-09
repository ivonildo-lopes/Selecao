import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  @Input() label: string;

  @Input() type: string;

  @Input() inputClass: string;

  @Input() placeholder: string;

  @Input() value: any;

  @Input()
  public inputID: string;

  @Input()
  public inputName: string;

  constructor() {
    this.label = 'Texto';
    this.type = 'text';
    this.inputClass = 'form-control';
  }

  onEvent(event) {

  }

}
