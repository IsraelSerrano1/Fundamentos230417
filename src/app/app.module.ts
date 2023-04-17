import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FundamentoTSComponent } from './fundamento-ts/fundamento-ts.component';
import { FormsModule } from '@angular/forms';
import { DirectivasComponent } from './directivas/directivas.component';
import { Padre1Component } from './padre1/padre1.component';
import { Hijo1Component } from './hijo1/hijo1.component';
import { Hijo2Component } from './hijo2/hijo2.component';
import { Padre2Component } from './padre2/padre2.component';

@NgModule({
  declarations: [
    AppComponent,
    FundamentoTSComponent,
    DirectivasComponent,
    Padre1Component,
    Hijo1Component,
    Hijo2Component,
    Padre2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
