import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  public links: any[];

  @Input()
  public title: string;


  @Input()
  public info: string;

  constructor() { }

  ngOnInit() {
  }

  onClick(link) {
    this.links.forEach(item => {
      item.ativo = item.title === link.title;
    });
  }

}
