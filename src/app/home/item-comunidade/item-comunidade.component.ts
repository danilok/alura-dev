import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ItemComunidade } from './../item-comunidade';

@Component({
  selector: 'app-ad-item-comunidade',
  templateUrl: './item-comunidade.component.html',
  styleUrls: ['./item-comunidade.component.css']
})

export class ItemComunidadeComponent {

  @Input() item: ItemComunidade;

  constructor(private router: Router) { }

  mostrarCodigo(): void {
    this.router.navigate(['/home/editor']);
  }
}
