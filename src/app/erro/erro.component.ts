import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'caelumpic-erro',
  templateUrl: './erro.component.html',
  styles: []
})
export class ErroComponent implements OnInit {

  mensagem = 'Essa página não foi encontrada =/';

  constructor() { }

  ngOnInit() {
  }

}
