import { Component, HostListener, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ad-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  exibeMenu = false;
  exibeBusca = false;
  iconeMenu = 'fa fa-bars';
  fonteIcone = { 'font-size': '1rem' };

  constructor(private router: Router) { }

  @HostListener('window:resize', ['$event'])
  onResize(event): void{
    if (window.outerWidth > 768) {
      this.exibeMenu = false;
      this.iconeMenu = 'fa fa-bars';
      this.fonteIcone = { 'font-size' : '1rem' };
    }
  }

  mostrarMenuNav(): void {
    console.log('menu');
    this.exibeMenu = !this.exibeMenu;
    if (this.exibeMenu || this.exibeBusca) {
      this.iconeMenu = 'fa fa-times';
      this.fonteIcone = { 'font-size': '1.25rem' };
      if (this.exibeBusca) {
        this.exibeMenu = false;
        this.exibeBusca = false;
        this.iconeMenu = 'fa fa-bars';
        this.fonteIcone = { 'font-size' : '1rem' };
      }
    } else {
      this.iconeMenu = 'fa fa-bars';
      this.fonteIcone = { 'font-size' : '1rem' };
    }
  }

  mostrarBusca(): void {
    console.log('busca');
    this.exibeBusca = !this.exibeBusca;
    if (this.exibeBusca) {
      this.iconeMenu = 'fa fa-times';
      this.fonteIcone = { 'font-size' : '1.25rem' };
    } else {
      this.iconeMenu = 'fa fa-bars';
      this.fonteIcone = { 'font-size' : '1rem' };
    }
  }

  navegar(rota: string): void {
    // this.exibeMenu = false;
    this.mostrarMenuNav();
    this.router.navigate([rota]);
  }
}
