import { Local } from './../model/local';
import { Http } from '@angular/http';

import { MessageTO } from './../model/message.to';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LocalService extends ApiService {

  constructor(private httpChild: Http) {
    super(httpChild);
  }

  findByIdSelecao(idSelecao: number): Observable<MessageTO> {
    return this.get('selective/' + idSelecao + '/places').map(res => res);
  }

  findById(idSelecao: number, id: number): Observable<MessageTO> {
    return this.get('selective/' + idSelecao + '/' + id + '/places').map(res => res);
  }

  deletar(idSelecao: number, id: number): Observable<MessageTO> {
    return this.delete('selective/' + idSelecao + '/' + id + '/place').map(res => res);
  }

  saveUpdate(idSelecao: number, local: Local): Observable<MessageTO> {
    return this.post('selective/' + idSelecao + '/place', local).map(res => res);
  }

}
