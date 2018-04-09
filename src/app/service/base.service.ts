import { ApiService } from './api.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export abstract class BaseService {



  constructor(private apiService: ApiService) {

  }

  retornaUrlAmbiente() {
    return this.apiService.returnURlAmbiente();
  }



}
