import { Injectable } from '@angular/core';

import { IdbService } from 'src/app/shared/services/idb/idb.service';
import { ItemComunidade } from 'src/app/shared/models/item-comunidade';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/core/user/user';
import { first, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EditorService {

  private item: ItemComunidade;
  private saveSubject = new BehaviorSubject<boolean>(false);
  private deleteSubject = new BehaviorSubject<boolean>(false);
  private user: User;

  constructor(
    private userSerice: UserService,
    private idbService: IdbService
  ) {
    this.initializeItem();
  }

  corBorda = '#6BD1FF';
  linguagem = 'js';
//   exemplo = `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

// const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

// const unfold = (f, seed) => {
//   const go = (f, seed, acc) => {
//     const res = f(seed)
//     return res ? go(f, res[1], acc.concat([res[0]])) : acc
//   }
//   return go(f, seed, [])
// }`;
  exemplo = `console.log('Hello Alura Dev')`;

  initializeItem(): void {
    const initial: ItemComunidade = {
      titulo: '',
      descricao: '',
      codigo: this.exemplo,
      linguagem: this.linguagem,
      cor: this.corBorda,
      imagemUrl: '',
      numComentarios: 0,
      numFavoritos: 0,
      usuario: 'Challenger'
    };
    this.item = initial;
  }

  setId(id: number): void {
    this.item.id = id;
  }

  clearItem(): void {
    this.item = null;
  }

  setItem(item: ItemComunidade): void {
    this.item = item;
  }

  getItem(): ItemComunidade {
    return this.item ? this.item : null;
  }

  salvarProjeto(): Observable<boolean> {
    return this.saveSubject.asObservable();
  }

  notificarSalvar(): void {
    this.saveSubject.next(true);
  }

  notificarSalvo(): void {
    this.saveSubject.next(false);
  }

  apagarProjeto(): Observable<boolean> {
    return this.deleteSubject.asObservable();
  }

  notificarApagar(): void {
    this.deleteSubject.next(true);
  }

  notificarApagado(): void {
    this.deleteSubject.next(false);
  }

  atualizarCodigo(codigo: string): void {
    if (!this.item) {
      this.initializeItem();
    }

    this.item.codigo = codigo;
  }

  atualizarDadosConfig(dados): void {
    this.user = this.userSerice.getUser();

    if (!this.item) {
      this.initializeItem();
    }

    this.item.titulo = dados.titulo;
    this.item.descricao = dados.descricao;
    this.item.linguagem = dados.linguagem;
    this.item.cor = dados.cor;
    this.item.imagemUrl = this.user.imagemUrl;
    this.item.usuario = this.user.name;
  }

  salvarCodigo(): Observable<any> {
    if (!this.item.codigo) {
      throw new Error('Código em branco');
    }

    if (!this.item.id) {
      return this.idbService.save(this.idbService.codigosDb, this.item)
        .pipe(
          map((key) => {
            this.setId(key);
            this.notificarSalvo();
            return true;
          })
        )
        .pipe(first());
    } else {
      return this.idbService.updateByKey(this.idbService.codigosDb, this.item)
        .pipe(
          map((storeData) => {
            this.notificarSalvo();
            return true;
          })
        )
        .pipe(first());
    }
  }

  modificarCodigo(): Observable<any> {

    if (!this.item.codigo) {
      throw new Error('Código em branco');
    }

    if (!this.item.id) {
      throw new Error('Projeto sem Id');
    }

    return this.idbService.updateByKey(this.idbService.codigosDb, this.item).pipe(first());
  }

  apagarCodigo(): Observable<any> {

    if (!this.item.id) {
      throw new Error('Projeto sem Id');
    }

    return this.idbService.deleteByKey(this.idbService.codigosDb, this.item.id).pipe(first());
  }

  buscarPorId(id: number): Observable<any> {
    return this.idbService.getByKey(this.idbService.codigosDb, id);
  }
}
