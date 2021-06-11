import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ad-input-busca',
  templateUrl: './input-busca.component.html',
  styleUrls: ['input-busca.component.css']
})
export class InputBuscaComponent implements OnChanges {
  @Input() exibeBusca = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(this.exibeBusca);
  }
}
