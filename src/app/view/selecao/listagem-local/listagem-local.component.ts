import { LocalService } from './../../../service/local.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem-local',
  templateUrl: './listagem-local.component.html',
  styleUrls: ['./listagem-local.component.css']
})
export class ListagemLocalComponent implements OnInit {

  public cabecalho: string[] = ['ID', 'Local', 'Pais', 'Estado', 'Cidade', 'Telefone'];

  locais: Array<Object> = new Array<Object>();
  id: number;

  public buttonsCadastro = {
    editar: true,
    excluir: true,
    adicionar: false
  };

  constructor(private localService: LocalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.localService.findByIdSelecao(this.id).subscribe(res => {
      this.populaLista(res);
    });
  }

  onDelete(usuario) {
    this.localService.deletar(this.id, usuario).subscribe(res => {
      this.populaLista(res);
    });
  }

  onEdit(local) {
    localStorage.setItem('idLocal', local.id);
    this.router.navigate(['selective/' + this.id + '/place/new']);
  }

  novo() {
    localStorage.setItem('idLocal', undefined);
    this.router.navigate(['selective/' + this.id + '/place/new']);
  }

  onLinhaTable(object) {
    console.log(object);
  }


  populaLista(res) {
    this.locais = new Array<Object>();
    res.conteudo.forEach(item => {
      this.locais.push({
        id: item.id,
        local: item.nome,
        pais: item.pais,
        estado: item.estado,
        cidade: item.cidade,
        telefone: item.telefone,

      });
    });

  }


}
