import { Component, Input, OnInit } from '@angular/core';

import { ItemComunidade } from 'src/app/shared/models/item-comunidade';

@Component({
  selector: 'app-ad-card',
  templateUrl: 'card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input() item: ItemComunidade;

  favoritado = false;

  constructor() { }

  ngOnInit(): void { }

  clickComentario(): void {
    alert('Funcionalidade não implementada');
  }

  clickFavorito(): void {
    this.favoritado = !this.favoritado;
    if (this.favoritado) {
      this.item.numFavoritos++;
    } else {
      this.item.numFavoritos--;
    }
  }
}
