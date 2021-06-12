import { EditorService } from './../editor/editor.service';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { HighlightService } from '../../shared/services/highlight/highlight.service';

@Component({
  selector: 'app-ad-codigo',
  templateUrl: './codigo.component.html',
  styleUrls: ['./codigo.component.css']
})
export class CodigoComponent implements OnChanges, OnInit, OnDestroy {

  @Input() corBorda: string;
  @Input() linguagem: string;

  debounce: Subject<string> = new Subject<string>();
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

  constructor(
    private editorService: EditorService,
    private highlightService: HighlightService
  ) { }

  ngOnInit(): void {
    this.debounce
      .pipe(debounceTime(300))
      .subscribe(codeContent => this.updateCode(codeContent));
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

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

  updateCode(codeContent): void {
    this.editorService.atualizarCodigo(codeContent);
  }
}
