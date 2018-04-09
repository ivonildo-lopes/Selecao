import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.css']
})
export class FieldsetComponent {

  @Input()
  public label: string; 

  constructor() { }

  ngOnInit() { }

}
