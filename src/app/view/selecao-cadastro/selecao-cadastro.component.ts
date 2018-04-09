import { Aba } from './../../components/abas/aba';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao-cadastro',
  templateUrl: './selecao-cadastro.component.html',
  styleUrls: ['./selecao-cadastro.component.css']
})
export class SelecaoCadastroComponent implements OnInit {

  abas: Array<Aba> = new Array<Aba>();

 usuario: string;
 local: string;

  id: number;

  constructor() {
    this.abas.push(new Aba('Usuario', true));
    this.abas.push(new Aba('Local', false));
  }

  ngOnInit() {
    if (window.location.href.includes('places')) {
      this.local = 'active';
    }
  }

}
