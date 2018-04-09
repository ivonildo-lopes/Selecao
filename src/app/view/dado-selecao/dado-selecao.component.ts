import { Selecao } from './../../model/selecao';
import { SelectiveService } from './../../service/selective.service';
import { ActivatedRoute } from '@angular/router';


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado-selecao',
  templateUrl: './dado-selecao.component.html',
  styleUrls: ['./dado-selecao.component.css']
})
export class DadoSelecaoComponent implements OnInit {

  selecao: Selecao = new Selecao();

  id: number;

  constructor(private selecaoSerivce: SelectiveService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.selecaoSerivce.findById(this.id).subscribe(res => {
      this.selecao = res.conteudo;
    });
  }

}
