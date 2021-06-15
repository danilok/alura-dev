import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AfterContentChecked } from '@angular/core';

import { EditorService } from './../editor/editor.service';
import { ItemComunidade } from 'src/app/shared/models/item-comunidade';
import { HighlightService } from 'src/app/shared/services/highlight/highlight.service';

@Component({
  selector: 'app-ad-item-comunidade',
  templateUrl: './item-comunidade.component.html',
  styleUrls: ['./item-comunidade.component.css']
})

export class ItemComunidadeComponent implements OnInit, AfterContentChecked {

  @Input() item: ItemComunidade;

  codeClass = 'language-js';

  constructor(
    private router: Router,
    private editorService: EditorService,
    private highlightService: HighlightService
  ) { }

  ngOnInit(): void {
    this.codeClass = `language-${this.item.linguagem}`;
  }

  ngAfterContentChecked(): void {
    this.highlightService.highlightAll();
  }

  mostrarCodigo(item: ItemComunidade): void {
    this.editorService.setItem(item);
    this.router.navigate([`/home/editor/${item.id}`]);
  }
}
