import { BetweenDateComponent } from './between-date/between.date.component';
import { BetweenNumberComponent } from './between-number/between.number.component';
import { PasswordComponent } from './password/password.component';
import { DateComponent } from './date/date.component';
import { TextComponent } from './text/text.component';
import { CheckBoxComponent } from './checkbox/checkbox.component';
import { NumberComponent } from './number/number.component';
import { TabelaComponent } from './tabela/tabela.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { AbasComponent } from './abas/abas.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';
import { FieldsetComponent } from './fieldset/fieldset.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AbasComponent,
    InputComponent,
    RadioComponent,
    TabelaComponent,
    NumberComponent,
    CheckBoxComponent,
    TextComponent,
    DateComponent,
    PasswordComponent,
    AutocompleteComponent,
    BetweenNumberComponent,
    BetweenDateComponent,
    FieldsetComponent,
    DropdownComponent
  ],
  exports: [
    AbasComponent,
    InputComponent,
    RadioComponent,
    TabelaComponent,
    NumberComponent,
    CheckBoxComponent,
    TextComponent,
    DateComponent,
    PasswordComponent,
    AutocompleteComponent,
    BetweenNumberComponent,
    BetweenDateComponent,
    FieldsetComponent,
    DropdownComponent
  ]
})
export class ComponentModule { }
