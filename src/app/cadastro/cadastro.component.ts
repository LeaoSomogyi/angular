import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto.model';
import { FotoService } from '../foto/foto.service';;
import { ActivatedRoute, Router } from '@angular/router';
import { Mensagem } from '../mensagem/mensagem.model';
import { Classe } from '../mensagem/mensagem.classes.enum';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit{  

  titulo = '';
  foto = new Foto();
  mensagem = new Mensagem();
  botao = '';
  formCadastro: FormGroup;

  constructor(private fotoService: FotoService, private rota: ActivatedRoute, private roteamento: Router, 
    private formBuilder:FormBuilder){ }

  ngOnInit() {  
    
    this.formCadastro = this.formBuilder.group({
      titulo: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(3)
        ])        
      ],
      url: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(3)
        ])        
      ],
      descricao:''
    });
    
    let idRota = this.rota.snapshot.params.idFoto;

    if(idRota != undefined){
      this.fotoService.buscarPorId(idRota).subscribe(
        (retorno) => {
          this.foto = retorno;
          this.titulo = 'Editando a foto ' + this.foto.titulo;
          this.botao = 'Editar';
          this.formCadastro.patchValue(retorno);
        }
      );      
    }
    else{
      this.titulo = 'Cadastro de fotos';
      this.botao = 'Salvar';
    }
  }

  getErro(campo): Mensagem{
    let msg = new Mensagem();
    msg.classe = Classe.danger;

    if(campo.errors){
      if(campo.errors.required){
        msg.mensagem = 'O campo é obrigatório!';      
      }
  
      if(campo.errors.minlength){
        msg.mensagem = 'O campo deve conter pelo menos 5 caracteres!';
      }
    }

    return msg;
  }

  onKey(event){
    this.foto = {...this.foto, ...this.formCadastro.value}
  }

  salvar(){

    this.foto = {...this.foto, ...this.formCadastro.value}

    if(this.foto._id != ''){
      this.fotoService.atualizar(this.foto)
      .subscribe(
        (response) => 
        {     
          this.mensagem.mensagem = 'Foto ' + this.foto.titulo + ' atualizada com sucesso =)';                   
          this.mensagem.classe = Classe.success;
          console.log(response.status);
          this.formCadastro.reset();   
          this.foto = new Foto();        
          this.timeout();
          this.timeOutRedirect();
        },
        (erro) => {
          this.mensagem.mensagem = 'Problemas ao cadastradar a foto =/';
          this.mensagem.classe = Classe.danger;
          console.log(erro);
          this.timeout();
          this.timeOutRedirect();
        }
      );
    }
    else{
      this.fotoService.cadastrar(this.foto)
      .subscribe(
        () => 
        {     
          this.mensagem.mensagem = 'Foto ' + this.foto.titulo + ' cadastrada com sucesso =)';                   
          this.mensagem.classe = Classe.success;
          this.formCadastro.reset();
          this.foto = new Foto(); 
          this.timeout();          
        },
        (erro) => {
          this.mensagem.mensagem = 'Problemas ao cadastradar a foto =/';
          this.mensagem.classe = Classe.danger;
          console.log(erro);
          this.timeout();
          this.timeOutRedirect();
        }
      );
    }    
  }

  timeout(){
    setTimeout(() => {
      this.mensagem = new Mensagem();
      this.timeout();
    }, 2000);
  }

  timeOutRedirect()
  {
    setTimeout(() => {
      this.roteamento.navigate(['']);
    }, 4000);
  }

 }
