import { Routes, RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NovaTransferenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { NovoExtratoComponent } from './novo-extrato/novo-extrato.component';
import { HttpClientModule } from '@angular/common/http';
import ptBR from '@angular/common/locales/pt';

registerLocaleData(ptBR, 'pt');

export const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full' },
  { path: 'extrato', component: NovoExtratoComponent },
  { path: 'nova-transferencia', component: NovaTransferenciaComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NovaTransferenciaComponent,
    NovoExtratoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
