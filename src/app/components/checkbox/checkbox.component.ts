import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckBoxComponent implements OnInit {

  @Input() label: string;

  @Input() value: boolean;

  checked: string;

  @Output()
  public bind: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    this.checked = this.value != null && this.value ? 'checked' : '';
  }

  onEvent(event) {
    this.bind.emit(event.target.checked);
  }

}
