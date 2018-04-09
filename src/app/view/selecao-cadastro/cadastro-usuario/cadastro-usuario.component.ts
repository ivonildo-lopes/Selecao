import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './../../../service/usuario.service';
import { Usuario } from './../../../model/usuario';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {

  listaSexo: Array<Object> = new Array<Object>();

  usuario: Usuario;
  id: number;
  idUsuario: any;

  constructor(private usuarioServise: UsuarioService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.idUsuario = localStorage.getItem('idUsuario');
    this.listaSexo.push({ id: 'M', descricao: 'Masculino' });
    this.listaSexo.push({ id: 'F', descricao: 'Feminino' });
    this.usuario = new Usuario();
  }

  ngOnInit() {
    this.carregaUsuario();


  }

  salvar() {
    this.usuarioServise.saveUpdate(this.id, this.usuario).subscribe(res => {
      if (res.sucesso) {
        console.log(this.id);

        this.router.navigate(['selective/' + this.id + '/users']);
      }
    });
  }

  cancelar() {
    this.router.navigate(['selective/' + this.id + '/users']);

  }

  carregaUsuario() {

    if (this.idUsuario !== null && this.idUsuario !== 'undefined' ) {
      this.usuarioServise.findById(this.id, this.idUsuario).subscribe(res => {
        if (res.conteudo !== null) {
          this.usuario = res.conteudo;
        } else {
          this.usuario = new Usuario();
        }

      });
    } else {
      this.usuario = new Usuario();
    }

  }

}
