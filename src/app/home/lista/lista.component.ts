import { Component, OnInit } from '@angular/core';

import { ItemComunidade } from 'src/app/shared/models/item-comunidade';
import { IdbService } from 'src/app/shared/services/idb/idb.service';

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

  constructor(private idbService: IdbService) { }

  ngOnInit(): void {
    this.idbService.getAll(this.idbService.codigosDb)
      .subscribe((codigos) => {
        this.itens = codigos;
      });
  }
}
