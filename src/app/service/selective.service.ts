import { Http } from '@angular/http';

import { MessageTO } from './../model/message.to';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class SelectiveService extends ApiService {

  constructor(private httpChild: Http) {
    super(httpChild);
  }

  findById(id: number): Observable<MessageTO> {
    return this.get('selective/' + id).map(res => res);
  }

}
