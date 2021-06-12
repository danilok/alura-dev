import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CoreModule } from './core/core.module';
import { ErrorsModule } from './errors/errors.module';
import { HighlightService } from './shared/services/highlight/highlight.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ErrorsModule,
    AppRoutingModule
  ],
  providers: [HighlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
