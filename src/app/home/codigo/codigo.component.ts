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

  codigo = '';

  constructor(
    private editorService: EditorService,
    private highlightService: HighlightService
  ) { }

  ngOnInit(): void {
    const item = this.editorService.getItem();
    if (item) {
      this.codigo = item.codigo;
      this.styleCorBorda = { 'background-color': item.cor };
      this.codeClass = `language-${item.linguagem}`;
    }

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
