import { ActivatedRoute } from '@angular/router';
import { SelectiveService } from './../../service/selective.service';
import { Selecao } from './../../model/selecao';
import { Aba } from './../../components/abas/aba';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent implements OnInit {

  abas: Array<Aba> = new Array<Aba>();

  selecao: Selecao = new Selecao();

  id: number;

  constructor(private selecaoSerivce: SelectiveService, private route: ActivatedRoute) {
    this.abas.push(new Aba('Usuario', true));
    this.abas.push(new Aba('Local', false));
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.selecaoSerivce.findById(this.id).subscribe(res => {
      this.selecao = res.conteudo;
    });
  }

}
