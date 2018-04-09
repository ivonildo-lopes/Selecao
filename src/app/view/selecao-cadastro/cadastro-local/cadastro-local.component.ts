import { ActivatedRoute, Router } from '@angular/router';
import { LocalService } from './../../../service/local.service';
import { Local } from './../../../model/local';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-local',
  templateUrl: './cadastro-local.component.html',
  styleUrls: ['./cadastro-local.component.css']
})
export class CadastroLocalComponent implements OnInit {

  local: Local;
  id: number;
  idLocal: any;

  constructor(private localServise: LocalService, private route: ActivatedRoute, private router: Router) {
    this.id = this.route.snapshot.params['id'];
    this.idLocal = localStorage.getItem('idLocal');

    this.local = new Local();
  }

  ngOnInit() {
    this.carregaUsuario();


  }

  salvar() {
    this.localServise.saveUpdate(this.id, this.local).subscribe(res => {
      if (res.sucesso) {
        console.log(this.id);

        this.router.navigate(['selective/' + this.id + '/places']);
      }
    });
  }

  cancelar() {
    this.router.navigate(['selective/' + this.id + '/places']);

  }

  carregaUsuario() {

    if (this.idLocal !== null && this.idLocal !== 'undefined' ) {
      this.localServise.findById(this.id, this.idLocal).subscribe(res => {
        if (res.conteudo !== null) {
          this.local = res.conteudo;
        } else {
          this.local = new Local();
        }

      });
    } else {
      this.local = new Local();
    }

  }


}
