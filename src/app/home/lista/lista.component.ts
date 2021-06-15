import { Component, OnInit } from '@angular/core';

import { ItemComunidade } from 'src/app/shared/models/item-comunidade';
import { IdbService } from 'src/app/shared/services/idb/idb.service';

@Component({
  selector: 'app-ad-lista',
  templateUrl: './lista.component.html',
  styleUrls: [ './lista.component.css']
})

export class ListaComponent implements OnInit {

  itens: ItemComunidade[] = [];

  constructor(private idbService: IdbService) { }

  ngOnInit(): void {
    this.idbService.getAll(this.idbService.codigosDb)
      .subscribe((codigos) => {
        this.itens = codigos;
      });
  }
}
