import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

import { IdbService } from 'src/app/shared/services/idb/idb.service';

@Component({
  selector: 'app-ad-admin',
  templateUrl: './admin.component.html',
  styleUrls: [
    '../home.css',
    './admin.component.css'
  ]
})
export class AdminComponent implements OnInit, OnDestroy {

  durationInSeconds = 2;
  salvos = 0;
  desabilitarApagar = true;

  contadorSubs: Subscription;

  constructor(
    private idbService: IdbService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.contarProjetos();
  }

  ngOnDestroy(): void {
    this.contadorSubs.unsubscribe();
  }

  contarProjetos(): void {
    this.contadorSubs = this.idbService.count(this.idbService.codigosDb)
      .subscribe((counter) => {
        this.salvos = counter;
        this.desabilitarApagar = this.salvos > 0 ? false : true;
      });
  }

  clear(): void {
    this.idbService.clear(this.idbService.codigosDb)
      .subscribe((successDeleted) => {
        if (successDeleted) {
          this.contarProjetos();
          this.snackBar.open('Projetos removidos com sucesso!', '', {
            duration: this.durationInSeconds * 1000
          });
        } else {
          this.snackBar.open('Erro ao remover projetos!', '', {
            duration: this.durationInSeconds * 1000
          });
        }
      });
  }
}
