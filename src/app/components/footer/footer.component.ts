import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input()
  public versionJava: string;

  @Input()
  public versionAngular: string;

  @Input()
  public title: string;

  constructor() { }

  ngOnInit() {
  }

}
