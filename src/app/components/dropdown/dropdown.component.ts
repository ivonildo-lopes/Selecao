import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {

  @Input()
  public label: string;

  @Input()
  public inputID: string;

  @Input()
  public inputName: string;

  @Input()
  public listaConteudo: any[];

  @Output()
  public bind: EventEmitter<string> = new EventEmitter<string>();

  onEvent(event) {
    this.bind.emit(event.target.value);
  }

  constructor() { }

}
