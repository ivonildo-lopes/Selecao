
import { Aba } from './aba';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-abas',
  templateUrl: './abas.component.html',
  styleUrls: ['./abas.component.css']
})
export class AbasComponent implements OnInit {

  @Input() abas: Array<Aba>;

  constructor() { }

  ngOnInit() {
  }

}
