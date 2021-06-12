import { NgModule } from '@angular/core';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { dbConfig } from './idb.config';

const modules = [
  NgxIndexedDBModule.forRoot(dbConfig)
];

@NgModule({
  declarations: [],
  imports: [...modules],
})
export class IdbModule { }
