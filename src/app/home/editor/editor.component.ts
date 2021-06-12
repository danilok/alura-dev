import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EditorService } from './editor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-ad-editor',
  templateUrl: './editor.component.html',
  styleUrls: [
    '../home.css',
    './editor.component.css'
  ]
})
export class EditorComponent implements OnInit {
  corBorda = '#6BD1FF';
  linguagem = 'js';

  salvarProjeto$: Observable<boolean>;

  durationInSeconds = 2;

  constructor(
    private editorService: EditorService,
    private snackBar: MatSnackBar
  ) {
    this.salvarProjeto$ = editorService.salvarProjeto();
  }

  ngOnInit(): void {
    this.salvarProjeto$.subscribe((save) => {
      // console.log('Notificação salvar', save);
      if (save) {
        try {
          this.editorService.salvarCodigo()
            .subscribe(salvo => {
              if (salvo) {
                this.snackBar.open('Projeto salvo com sucesso!!', '', {
                  duration: this.durationInSeconds * 1000
                });
              } else {
                this.snackBar.open('Erro ao salvor o projeto', '', {
                  duration: this.durationInSeconds * 1000
                });
              }
            });
        } catch (error) {
          console.log(error);
          this.editorService.notificarSalvo();
          this.snackBar.open(error.message, '', {
            duration: this.durationInSeconds * 1000
          });
        }
      }
    });
  }

}
