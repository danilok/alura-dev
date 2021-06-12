import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { ErrorsModule } from './errors/errors.module';
import { HighlightService } from './shared/services/highlight/highlight.service';
import { IdbModule } from './shared/services/idb/idb.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ErrorsModule,
    IdbModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    HighlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
