import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'caelumpic-mensagem',
  templateUrl: './mensagem.component.html',
  styles: []
})
export class MensagemComponent implements OnInit {

  @Input() mensagem;

  constructor() { }

  ngOnInit() {
  }

}
