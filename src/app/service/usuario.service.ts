import { Http } from '@angular/http';

import { MessageTO } from './../model/message.to';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable()
export class UsuarioService extends ApiService {

  constructor(private httpChild: Http) {
    super(httpChild);
  }

  findByIdSelecao(idSelecao: number): Observable<MessageTO> {
    return this.get('selective/' + idSelecao + '/users').map(res => res);
  }

  findById(idSelecao: number, id: number): Observable<MessageTO> {
    return this.get('selective/' + idSelecao + '/' + id + '/users').map(res => res);
  }

  deletar(idSelecao: number, id: number): Observable<MessageTO> {
    return this.delete('selective/' + idSelecao + '/' + id + '/user').map(res => res);
  }

  saveUpdate(idSelecao: number, usuario: Usuario): Observable<MessageTO> {
    return this.post('selective/' + idSelecao + '/user', usuario).map(res => res);
  }

}
