import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ad-configuracoes',
  templateUrl: './config.component.html',
  styleUrls: [
    '../home.css',
    './config.component.css'
  ]
})
export class ConfigComponent {

  @Output() cor = new EventEmitter<string>();
  @Output() linguagem = new EventEmitter<string>();

  corBorda = '#6BD1FF';

  mudarCorBorda(e): void {
    this.corBorda = e.target.value;
    this.cor.emit(this.corBorda);
  }

  mudarLinguagem(e): void {
    this.linguagem.emit(e.target.value);
  }
}
