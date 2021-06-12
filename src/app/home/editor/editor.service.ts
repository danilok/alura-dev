import { Injectable } from '@angular/core';

import { IdbService } from 'src/app/shared/services/idb/idb.service';
import { ItemComunidade } from 'src/app/shared/models/item-comunidade';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from 'src/app/core/user/user.service';
import { User } from 'src/app/core/user/user';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EditorService {

  private item: ItemComunidade;
  private saveSubject = new BehaviorSubject<boolean>(false);
  private user: User;

  constructor(
    private userSerice: UserService,
    private idbService: IdbService
  ) {
    const initial: ItemComunidade = {
      titulo: '',
      descricao: '',
      codigo: '',
      linguagem: '',
      cor: '',
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

  salvarProjeto(): Observable<boolean> {
    return this.saveSubject.asObservable();
  }

  atualizarCodigo(codigo: string): void {
    this.item.codigo = codigo;
  }

  atualizarDadosConfig(dados): void {
    this.user = this.userSerice.getUser();

    this.item.titulo = dados.titulo;
    this.item.descricao = dados.descricao;
    this.item.linguagem = dados.linguagem;
    this.item.cor = dados.cor;
    this.item.imagemUrl = this.user.imagemUrl;
    this.item.usuario = this.user.name;
  }

  notificarSalvar(): void {
    this.saveSubject.next(true);
  }

  notificarSalvo(): void {
    this.saveSubject.next(false);
  }

  // salvarCodigo(): Observable<any> {
  salvarCodigo(): Observable<any> {

//     const exemplo = `const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

// const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

// const unfold = (f, seed) => {
//   const go = (f, seed, acc) => {
//     const res = f(seed)
//     return res ? go(f, res[1], acc.concat([res[0]])) : acc
//   }
//   return go(f, seed, [])
// }`;

//     const item = {
//       codigo: exemplo,
//       cor: '#6bd1ff',
//       titulo: 'Título do projeto 1',
//       descricao: 'Essa é a descrição do meu projeto 1',
//       numComentarios: 3,
//       numFavoritos: 1,
//       imagemUrl: 'https://picsum.photos/32',
//       usuario: 'Challenger',
//       linguagem: 'js'
//     };

    if (!this.item.codigo) {
      throw new Error('Codigo em branco');
    }

    if (!this.item.id) {
      return this.idbService.save(this.idbService.codigosDb, this.item)
        .pipe(
          map((key) => {
            // console.log('key: ', key);
            this.setId(key);
            this.notificarSalvo();
            return true;
          }
        ));
    } else {
      return this.idbService.updateByKey(this.idbService.codigosDb, this.item)
        .pipe(
          map((storeData) => {
            // console.log('storeData: ', storeData);
            this.notificarSalvo();
            return true;
          })
        );
    }
  }

  modificarCodigo(): Observable<any> {

    if (!this.item.codigo) {
      throw new Error('Codigo em branco');
    }

    if (!this.item.id) {
      throw new Error('Projeto sem Id');
    }

    return this.idbService.updateByKey(this.idbService.codigosDb, this.item);
  }
}
