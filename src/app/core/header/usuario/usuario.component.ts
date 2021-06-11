import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: [ './usuario.component.css' ]
})
export class UsuarioComponent implements OnInit {

  @Input() pos: string;

  private classHeader = 'cabecalho__usuario';
  private classNav = 'cabecalho__nav-usuario';
  class: string = this.classHeader;

  constructor() { }

  ngOnInit(): void {
    if (this.pos === 'nav') {
      this.class = this.classNav;
    } else {
      this.class = this.classHeader;
    }
  }

}
