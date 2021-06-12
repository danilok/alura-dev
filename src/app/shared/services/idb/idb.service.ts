import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { NgxIndexedDBService, ObjectStoreMeta } from 'ngx-indexed-db';
import { ItemComunidade } from '../../models/item-comunidade';

@Injectable({providedIn: 'root'})
export class IdbService {

  codigosDb = 'codigos';

  constructor(private dbService: NgxIndexedDBService){ }

  init(): void {
    const storeSchema: ObjectStoreMeta = {
      store: this.codigosDb,
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        { name: 'usuario', keypath: 'usuario', options: { unique: false } }
      ],
    };

    this.dbService.createObjectStore(storeSchema);
  }

  count(dbName: string): Observable<any> {
    return this.dbService.count(dbName);
  }

  save(dbName: string, item: ItemComunidade): Observable<any> {
    return this.dbService.add(dbName, item);
  }

  getAll(dbName: string): Observable<any> {
    return this.dbService.getAll(dbName);
  }

  clear(dbName: string): Observable<any> {
    return this.dbService.clear(dbName);
  }

  updateByKey(dbName: string, item: ItemComunidade): Observable<any> {
    return this.dbService
      .update(dbName, item);
      // .updateByKey(dbName, item, item.usuario);
  }
}
