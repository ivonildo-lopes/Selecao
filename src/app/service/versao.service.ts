import { ApiService } from './../service/api.service';
import { MessageTO } from './../model/message.to';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class VersaoService {

  constructor(private apiService: ApiService) { }

  get(): Observable<MessageTO> {
    return this.apiService.get(`versao`).map(res => res);
  }

}
