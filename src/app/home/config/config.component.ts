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

  corBorda = '#6BD1FF';

  configForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private editorService: EditorService
  ) { }

  ngOnInit(): void {
    this.configForm = this.formBuilder.group({
      titulo: ['', Validators.required],
      descricao: ['', Validators.required],
      linguagem: ['js', Validators.required],
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
}
