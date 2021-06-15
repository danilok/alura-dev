import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EditorService } from '../editor/editor.service';

@Component({
  selector: 'app-ad-configuracoes',
  templateUrl: './config.component.html',
  styleUrls: [
    '../home.css',
    './config.component.css'
  ]
})
export class ConfigComponent implements OnInit {

  @Output() cor = new EventEmitter<string>();
  @Output() linguagem = new EventEmitter<string>();

  titulo = '';
  descricao = '';
  selLinguagem = 'js';
  corBorda = '#6BD1FF';

  exibirBotaoApagar = false;

  configForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private editorService: EditorService
  ) { }

  ngOnInit(): void {
    const item = this.editorService.getItem();
    if (item) {
      this.titulo = item.titulo;
      this.descricao = item.descricao;
      this.selLinguagem = item.linguagem;
      this.corBorda = item.cor;
      this.exibirBotaoApagar = item.id ? true : false;
    }

    this.configForm = this.formBuilder.group({
      titulo: [this.titulo, Validators.required],
      descricao: [this.descricao, Validators.required],
      linguagem: [this.selLinguagem, Validators.required],
      cor: [this.corBorda, Validators.required]
    });
  }

  mudarCorBorda(e): void {
    this.corBorda = e.target.value;
    this.cor.emit(this.corBorda);
  }

  mudarLinguagem(e): void {
    this.linguagem.emit(e.target.value);
  }

  salvarProjeto(): void {
    this.editorService.atualizarDadosConfig(this.configForm.getRawValue());
    this.editorService.notificarSalvar();
  }

  apagarProjeto(): void {
    this.editorService.notificarApagar();
  }
}
