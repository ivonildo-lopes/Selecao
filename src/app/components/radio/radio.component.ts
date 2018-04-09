import { RadioOption } from './radio-option.model';
import { Component, OnInit, Input, forwardRef, EventEmitter, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';


@Component({
  selector: 'app-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ],
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit, ControlValueAccessor {

  @Input()
  public options: RadioOption[];

  @Input()
  public label: string;

  public value: any;

  public onChange: any;

  constructor() { }

  @Output()
  public bind: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
  }

  /**
     * Write a new value to the element.
     */
  writeValue(obj: any): void {
    this.value = obj;
  }
  /**
   * Set the function to be called when the control receives a change event.
   */
  registerOnChange(fn: any): void {
    this.value = fn;
    this.onChange = fn;
    this.bind.emit(fn);
  }
  /**
   * Set the function to be called when the control receives a touch event.
   */
  registerOnTouched(fn: any): void {

  }
  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void {

  }

}
