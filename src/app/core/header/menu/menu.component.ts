import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-menu',
  templateUrl: './menu.component.html',
  styleUrls: [ './menu.component.css' ]
})
export class MenuComponent implements OnInit {

  @Output() navigate = new EventEmitter<string>();

  comunidade = false;
  editor = false;
  admin = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    const rota = this.router.routerState.snapshot.url;
    switch (rota) {
      case '/home/editor':
        this.editor = true;
        this.comunidade = !this.editor;
        this.admin = !this.editor;
        break;
      case '/home/comunidade':
        this.comunidade = true;
        this.editor = !this.comunidade;
        this.admin = !this.comunidade;
        break;
      case '/home/admin':
        this.admin = true;
        this.editor = !this.admin;
        this.comunidade = !this.admin;
        break;
    }
  }

  navegarPara(rota: string): void {
    this.navigate.emit(rota);
  }
}
