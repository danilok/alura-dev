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

  ngOnInit() {
    this.itens = [
      { codigo: this.exemplo, cor: '#6bd1ff' },
      { codigo: this.exemplo, cor: '#9AFF6B' },
      { codigo: this.exemplo, cor: '#FFC46B' },
      { codigo: this.exemplo, cor: '#FF6BCD' }
    ];
  }
}
