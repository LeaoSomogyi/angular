import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FotoModule } from './foto/foto.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PainelModule } from './painel/painel.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { routes } from './app.routes';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ErroComponent } from './erro/erro.component';
import { MensagemComponent } from './mensagem/mensagem.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListagemComponent,
    ErroComponent,
    MensagemComponent
  ],
  imports: [
    ReactiveFormsModule,
    NgbModule,
    BrowserModule,
    HttpClientModule,
    FotoModule,
    FormsModule,
    PainelModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
