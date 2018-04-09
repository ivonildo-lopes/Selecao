import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {

  @Input()
  public value: string;

  values: string[];

  @Input()
  public listaConteudo: any[];

  @Input()
  public separador: string;

  @Input()
  public inputID: string;

  @Input()
  public inputName: string;

  @Input()
  public label: string;

  @Input()
  public inputPlaceHolder: string;

  @Output()
  public bind: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onEvent(event) {
    this.listaConteudo.forEach(item => {
      if (item.id === Number(String(event.target.value).split(this.separador)[0].trim())) {
        this.bind.emit(item.object);
        return;
      }
    });
  }

}
