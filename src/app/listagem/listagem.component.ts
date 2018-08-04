import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Foto } from '../foto/foto.model';
import { FotoService } from '../foto/foto.service';
import { Mensagem } from '../mensagem/mensagem.model';
import { Classe } from '../mensagem/mensagem.classes.enum';

@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html'
})
export class ListagemComponent { 
  listaFotos: Foto[] = [];
  mensagem = new Mensagem();

  constructor(private fotoService: FotoService){
    this.listar();
  }

  listar(){
    this.fotoService.listar()
      .subscribe(
        (retorno) => {this.listaFotos = retorno},
        (erro) => {console.log(erro)}
      );
  }

  remover(foto: Foto){
    this.fotoService.remover(foto._id)
    .subscribe(
      () => {
        this.mensagem.mensagem = 'Foto' + foto.titulo + ' removida com sucesso =)';
        this.mensagem.classe = Classe.success;
        
        this.listaFotos = this.listaFotos.filter(l => l._id != foto._id);

        this.timeout();
      },
      (erro) => {
        console.log(erro);
        this.mensagem.mensagem = 'Problemas ao remover a foto =/';
        this.mensagem.classe = Classe.danger;
        this.timeout();
      }
    );
  }

  timeout(){
    setTimeout(() => {
      this.mensagem = new Mensagem();
      this.timeout();
    }, 2000);
  }

}
