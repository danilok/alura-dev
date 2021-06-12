import { Component, OnInit } from '@angular/core';

import { ItemComunidade } from './../item-comunidade';

@Component({
  selector: 'app-ad-lista',
  templateUrl: './lista.component.html',
  styleUrls: [ './lista.component.css']
})

export class ListaComponent implements OnInit {

  exemplo = `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

const unfold = (f, seed) => {
  const go = (f, seed, acc) => {
    const res = f(seed)
    return res ? go(f, res[1], acc.concat([res[0]])) : acc
  }
  return go(f, seed, [])
}
`;

  itens: ItemComunidade[] = [];

  constructor() { }

  ngOnInit(): void {
    this.itens = [
      {
        codigo: this.exemplo,
        cor: '#6bd1ff',
        titulo: 'Título do projeto 1',
        descricao: 'Essa é a descrição do meu projeto 1',
        numComentarios: 3,
        numFavoritos: 1,
        imagemUrl: 'https://picsum.photos/32',
        usuario: 'Challenger'
      },
      {
        codigo: this.exemplo,
        cor: '#9AFF6B',
        titulo: 'Título do projeto 2',
        descricao: 'Essa é a descrição do meu projeto 2',
        numComentarios: 3,
        numFavoritos: 4,
        imagemUrl: 'https://picsum.photos/32',
        usuario: 'Challenger'
      },
      {
        codigo: this.exemplo,
        cor: '#FFC46B',
        titulo: 'Título do projeto 3',
        descricao: 'Essa é a descrição do meu projeto 3',
        numComentarios: 4,
        numFavoritos: 2,
        imagemUrl: 'https://picsum.photos/32',
        usuario: 'Challenger'
      },
      {
        codigo: this.exemplo,
        cor: '#FF6BCD',
        titulo: 'Título do projeto 4',
        descricao: 'Essa é a descrição do meu projeto 4',
        numComentarios: 1,
        numFavoritos: 2,
        imagemUrl: 'https://picsum.photos/32',
        usuario: 'Challenger'
      }
    ];
  }
}
