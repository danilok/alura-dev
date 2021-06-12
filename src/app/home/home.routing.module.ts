import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';
import { EditorComponent } from './editor/editor.component';
import { ComunidadeComponent } from './comunidade/comunidade.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'editor',
        component: EditorComponent
      },
      {
        path: 'comunidade',
        component: ComunidadeComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'editor'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
