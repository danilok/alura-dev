import { Component } from '@angular/core';

@Component({
  selector: 'app-ad-configuracoes',
  templateUrl: './config.component.html',
  styleUrls: [
    '../home.css',
    './config.component.css'
  ]
})
export class ConfigComponent {
  mudarCorBorda(): void {
    console.log('mudei')
    // const editor = document.querySelector('.conteudo__codigo-container');
    // const seletorCor = document.querySelector('#cor');
    // editor.style.backgroundColor = seletorCor.value;
  }
}
