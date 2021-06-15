import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

import { EditorService } from './editor.service';
import { ItemComunidade } from 'src/app/shared/models/item-comunidade';
@Component({
  selector: 'app-ad-editor',
  templateUrl: './editor.component.html',
  styleUrls: [
    '../home.css',
    './editor.component.css'
  ]
})
export class EditorComponent implements OnInit, OnDestroy {
  corBorda = '#6BD1FF';
  linguagem = 'js';

  salvarProjeto$: Observable<boolean>;
  apagarProjeto$: Observable<boolean>;

  salvarSubs: Subscription;
  apagarSubs: Subscription;

  durationInSeconds = 2;

  item: ItemComunidade;

  constructor(
    private editorService: EditorService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id: string = this.route.snapshot.params.id;
    this.item = this.route.snapshot.data.item;
    if (!id) {
      this.editorService.clearItem();
      this.editorService.initializeItem();
    } else {
      if (this.item) {
        this.editorService.setItem(this.item);
      } else {
        this.router.navigate(['404']);
      }
    }

    this.salvarProjeto$ = this.editorService.salvarProjeto();
    this.apagarProjeto$ = this.editorService.apagarProjeto();

    this.salvarSubs = this.salvarProjeto$.subscribe((save) => this.tratarSalvar(save));
    this.apagarSubs = this.apagarProjeto$.subscribe((apagar) => this.tratarApagar(apagar));
  }

  tratarSalvar(save: boolean): void {
    if (save) {
      try {
        this.editorService.salvarCodigo()
          .subscribe(salvo => {
            if (salvo) {
              this.mostrarMensagem('Projeto salvo com sucesso!!');
              if (!this.item?.id) {
                this.item = this.editorService.getItem();
                this.router.navigate([`/home/editor/${this.item.id}`]);
              }
            } else {
              this.mostrarMensagem('Erro ao salvar o projeto!');
              this.editorService.notificarSalvo();
            }
          });
      } catch (error) {
        console.log(error);
        this.editorService.notificarSalvo();
        this.mostrarMensagem(error.message);
      }
    }
  }

  tratarApagar(apagar: boolean): void {
    if (apagar) {
      try {
        this.editorService.apagarCodigo()
          .subscribe(apagado => {
            if (apagado) {
              this.mostrarMensagem('Projeto apagado com sucesso!!');
              this.editorService.notificarApagado();
              this.router.navigate(['/home/editor']);
            } else {
              this.mostrarMensagem('Erro ao apagar o projeto!');
              this.editorService.notificarApagado();
            }
          });
      } catch (error) {
        console.log(error);
        this.editorService.notificarApagado();
        this.mostrarMensagem(error.message);
      }
    }
  }

  ngOnDestroy(): void {
    this.salvarSubs.unsubscribe();
    this.apagarSubs.unsubscribe();
  }

  mostrarMensagem(mensagem: string): void {
    this.snackBar.open(mensagem, '', {
      duration: this.durationInSeconds * 1000
    });
  }
}
