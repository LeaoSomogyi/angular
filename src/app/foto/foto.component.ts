import { Component, Input } from "@angular/core";
import { Foto } from "./foto.model";

@Component({
    selector: 'caelumpic-foto',
    template: '<img class="card-img-top" [src]="foto.url" [alt]="foto.titulo">'
})

export class FotoComponent {
    @Input() foto = new Foto();
}