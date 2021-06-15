import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

import { EditorService } from './editor.service';
import { ItemComunidade } from 'src/app/shared/models/item-comunidade';

@Injectable({ providedIn: 'root' })
export class EditorResolver implements Resolve<ItemComunidade> {

  constructor(private editorService: EditorService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ItemComunidade | Observable<ItemComunidade> {

    const id = parseInt(route.params.id, 10);
    const item = this.editorService.getItem();
    if (!item) {
      return null;
    }

    // Verificar se item possui o mesmo id do item armazenado00
    if (id === item.id) {
      return item;
    } else {
      if (id) {
        return this.editorService.buscarPorId(id)
          .pipe(map(itemDb => {
            if (itemDb) {
              this.editorService.setItem(itemDb);
              return itemDb;
            } else {
              return null;
            }
          }))
          .pipe(first());
      }
      return null;
    }
  }
}
