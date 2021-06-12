import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { HighlightService } from '../../shared/services/highlight/highlight.service';

@Component({
  selector: 'app-ad-codigo',
  templateUrl: './codigo.component.html',
  styleUrls: ['./codigo.component.css']
})
export class CodigoComponent implements OnChanges {

  @Input() corBorda: string;
  @Input() linguagem: string;

  styleCorBorda = { 'background-color': '#CCC' };
  codeClass = 'language-js';

  exemplo = `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}`;

  constructor(private highlightService: HighlightService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.corBorda) {
      this.styleCorBorda = { 'background-color': this.corBorda };
    }

    if (changes.linguagem) {
      this.codeClass = `language-${this.linguagem}`;
    }
  }

  aplicarHighlight(): void {
    this.highlightService.highlightAll();
  }
}
