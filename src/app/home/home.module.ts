import { NavComponent } from './nav/nav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CoreModule } from '../core/core.module';
import { EditorComponent } from './editor/editor.component';
import { ComunidadeComponent } from './comunidade/comunidade.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { CodigoComponent } from './codigo/codigo.component';
import { ConfigComponent } from './config/config.component';
import { ListaComponent } from './lista/lista.component';
import { ItemComunidadeComponent } from './item-comunidade/item-comunidade.component';
import { WindowControlsModule } from '../shared/components/window-controls/window-controls.modules';
import { CardComponent } from './card/card.component';
import { IdbService } from '../shared/services/idb/idb.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    NavComponent,
    CodigoComponent,
    ConfigComponent,
    EditorComponent,
    CardComponent,
    ItemComunidadeComponent,
    ListaComponent,
    ComunidadeComponent,
    AdminComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WindowControlsModule,
    CoreModule,
    MatSnackBarModule,
    RouterModule,
    HomeRoutingModule
  ],
  providers: [
    IdbService
  ]
})
export class HomeModule { }
