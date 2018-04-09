
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ApiService {


  homologacao: string;
  desenvolvimento: string;
  producao: string;
  localhost: string;
  url_base: string;
  ambiente: string;


  intMed_api: string;
  intMed_web: string;

  constructor(
    private http: Http
  ) {

    this.homologacao = `${environment.url_base_host.search('-homolog')}`;
    this.desenvolvimento = `${environment.url_base_host.search('-desenv')}`;
    this.localhost = `${environment.url_base_host.search('localhost')}`;

    if (this.homologacao === '3') {
      // this.url_base = `${environment.base_url_hapivda_homolog}` + `${environment.base_api_hapvida}`;

    } else if (this.desenvolvimento === '3') {
      // this.url_base = `${environment.base_url_hapivda_desenv}` + `${environment.base_api_hapvida}`;

    } else if (this.localhost === '0') {
      this.url_base = `${environment.base_api_hapvida}`;

    } else {
      // this.url_base = `${environment.base_url_hapivda_producao}` + `${environment.base_api_hapvida}`;
    }

  }

  returnURlAmbiente(): string {
    return this.url_base;
  }

  private setHeaders(): Headers {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return new Headers(headersConfig);
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

  get(path: string, params: URLSearchParams = new URLSearchParams()): Observable<any> {
    return this.http.get(this.url_base + `${path}`, { headers: this.setHeaders(), search: params })
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(
      this.url_base + `${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(
      this.url_base + `${path}`,
      JSON.stringify(body),
      { headers: this.setHeaders() }
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

  delete(path: string, body: Object = {}): Observable<any> {
    return this.http.delete(
      this.url_base + `${path}`,
      { headers: this.setHeaders() }
    )
      .catch(this.formatErrors)
      .map((res: Response) => res.json());
  }

}
