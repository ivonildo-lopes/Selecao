import { Component, OnInit, Input, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit, OnChanges {

  @Input()
  public listaConteudo: any[];

  @Input()
  public buttons: any;

  @Input()
  public listaCabecalho: any[];

  @Input()
  public count: number[];

  @Input()
  public  pages: number;

  @Output()
  public pageChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public edit: EventEmitter<Object> = new EventEmitter<Object>();

  @Output()
  public linhaTable: EventEmitter<Object> = new EventEmitter<Object>();

  @Output()
  public delete: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  public adicionar: EventEmitter<number> = new EventEmitter<number>();

  @Input()
  public currentPage = 1;

  public total: number;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes) {
    this.count = new Array<number>();
    this.total = Math.floor(Number(this.pages) / 10) + (Number(this.pages) % 10 !== 0 ? 1 : 0);
    let index2 = this.currentPage;
    let index = this.currentPage;
    const condition = this.total > 9 ? 10 : this.total;
    while (this.count.length < condition && this.count.length !== this.total) {
      if (index < this.total) {
        this.count.push(++index);
      }
      if (index2 !== 0) {
        this.count.push(index2--);
      }
    }
    this.count.sort((a: number, b: number) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  generateArray(obj) {
    return Object.keys(obj).map((key) => obj[key]);
  }

  onAdicionar(object) {
    this.adicionar.emit(object);
  }

  onDelete(id) {
    this.delete.emit(id);
  }

  onEdit(object) {
    this.edit.emit(object);
  }

  onLinhaTable(object) {
    this.linhaTable.emit(object);
  }

  onChangePage(number: number) {
    if (this.currentPage !== number && number > 0 && number <= this.total) {
      this.currentPage = number;
      this.pageChange.emit(this.currentPage);
    }
  }

}
