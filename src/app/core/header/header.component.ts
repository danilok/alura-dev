import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ad-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  exibeMenu = false;
  exibeBotaoMenu = false;
  exibeInputBusca = false;
  exibeBotaoBusca = false;
  exibeBotaoFechar = false;
  filtro = '';
  iconeMenu = 'fa fa-bars';
  fonteIcone = { 'font-size': '1rem' };

  private tablet = 768;
  private desktop = 1024;

  constructor(private router: Router) {
    if (window.outerWidth < this.tablet) {
      this.exibeBotaoMenu = true;
      this.exibeInputBusca = false;
      this.exibeBotaoBusca = true;
      this.exibeBotaoFechar = false;
    } else if (window.outerWidth < this.desktop) {
      this.exibeBotaoMenu = true;
      this.exibeInputBusca = true;
      this.exibeBotaoBusca = false;
      this.exibeBotaoFechar = false;
    } else {
      this.exibeBotaoMenu = false;
      this.exibeInputBusca = true;
      this.exibeBotaoBusca = false;
      this.exibeBotaoFechar = false;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void{
    if (window.outerWidth >= this.tablet) {
      if (this.exibeInputBusca) {
        this.exibeBotaoFechar = false;
      }
      if (this.exibeMenu) {
        this.exibeBotaoFechar = true;
        this.exibeBotaoMenu = false;
      } else {
        this.exibeBotaoFechar = false;
        this.exibeBotaoMenu = true;
      }
      this.exibeInputBusca = true;
      this.exibeBotaoBusca = false;
    }
    if (window.outerWidth > this.tablet) {
      this.exibeMenu = false;
      this.exibeBotaoMenu = true;
      this.exibeBotaoFechar = false;
      this.exibeBotaoBusca = false;
    }
    if (window.outerWidth < this.tablet) {
      if (this.exibeMenu) {
        this.exibeInputBusca = false;
        this.exibeBotaoBusca = true;
      } else if (!this.exibeBotaoBusca) {
        this.exibeInputBusca = false;
        this.exibeBotaoBusca = true;
      }
    }
  }

  clickBusca(): void {
    this.exibeBotaoMenu = false;
    this.exibeBotaoFechar = true;
    this.exibeBotaoBusca = true;
    this.exibeInputBusca = true;
  }

  clickMenu(): void {
    this.exibeBotaoMenu = false;
    this.exibeBotaoFechar = true;
    this.exibeBotaoBusca = true;
    this.exibeMenu = true;
  }

  clickFechar(): void {
    this.exibeBotaoMenu = true;
    this.exibeBotaoFechar = false;
    this.exibeBotaoBusca = true;
    if (window.outerWidth < this.tablet) {
      if (this.exibeMenu) {
        this.exibeInputBusca = false;
      } else {
        this.exibeInputBusca = false;
      }
    }
    this.exibeMenu = false;
  }

  navegar(rota: string): void {
    this.clickFechar();
    this.router.navigate([rota]);
  }
}
