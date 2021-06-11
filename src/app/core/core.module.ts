import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { InputBuscaComponent } from './header/input-busca/input-busca.component';
import { LogoComponent } from './header/logo/logo.component';
import { MenuComponent } from './header/menu/menu.component';
import { UsuarioComponent } from './header/usuario/usuario.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LogoComponent,
    InputBuscaComponent,
    UsuarioComponent,
    MenuComponent,
  ],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
