import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent {

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

  @Input()
  public trava: boolean;

  @Output()
  public bind: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onEvent(event) {
    this.bind.emit(event.target.value);
  }

}
