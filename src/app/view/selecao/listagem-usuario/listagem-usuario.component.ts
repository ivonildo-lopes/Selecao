import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './../../../service/usuario.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listagem-usuario',
  templateUrl: './listagem-usuario.component.html',
  styleUrls: ['./listagem-usuario.component.css']
})
export class ListagemUsuarioComponent implements OnInit {

  public cabecalho: string[] = ['ID', 'Nome Realizador', 'CPF', 'Sexo'];

  @Output() idPassado = new EventEmitter<number>();
  usuarios: Array<Object> = new Array<Object>();
  id: number;

  public buttonsCadastro = {
    editar: true,
    excluir: true,
    adicionar: false
  };

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.usuarioService.findByIdSelecao(this.id).subscribe(res => {
      this.populaLista(res);
    });
  }

  onDelete(usuario) {
    this.usuarioService.deletar(this.id, usuario).subscribe(res => {
      this.populaLista(res);
    });
  }

  onEdit(usuario) {
    this.idPassado.emit(usuario.id);

    localStorage.setItem('idUsuario', usuario.id);
    this.router.navigate(['selective/' + this.id + '/user/new']);

  }

  novo() {
    localStorage.setItem('idUsuario', undefined);
    this.router.navigate(['selective/' + this.id + '/user/new']);
  }

  onLinhaTable(object) {
    console.log(object);
  }


  populaLista(res) {
    this.usuarios = new Array<Object>();
    res.conteudo.forEach(item => {
      this.usuarios.push({
        id: item.id,
        nome: item.nome,
        cpf: item.cpf,
        sexo: item.sexo,

      });
    });

  }


}
