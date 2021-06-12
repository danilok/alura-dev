import { Component } from '@angular/core';
import { IdbService } from 'src/app/shared/services/idb/idb.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ad-admin',
  templateUrl: './admin.component.html',
  styleUrls: [
    '../home.css',
    './admin.component.css'
  ]
})
export class AdminComponent {

  durationInSeconds = 2;

  constructor(
    private idbService: IdbService,
    private snackBar: MatSnackBar
  ) { }

  clear(): void {
    this.idbService.clear(this.idbService.codigosDb)
      .subscribe((successDeleted) => {
        if (successDeleted) {
          this.snackBar.open('Projetos removidos com sucesso', '', {
            duration: this.durationInSeconds * 1000
          });
        } else {
          this.snackBar.open('Erro ao remover projetos', '', {
            duration: this.durationInSeconds * 1000
          });
        }
      });
  }
}
