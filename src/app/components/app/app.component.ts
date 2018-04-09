import { Router } from '@angular/router';
import { VersaoService } from './../../service/versao.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'app';

  version: any;

  url: string;

  readonly notifyOptions = {
    timeOut: 1500
  };

  public links: any;

  constructor() {

  }

}
