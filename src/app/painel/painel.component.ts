import { Input, Component } from "@angular/core";
import { Foto } from "../foto/foto.model";

@Component({
    selector: 'caelumpic-painel',
    templateUrl: './painel.component.html'
})

export class PainelComponent {

    @Input('foto') foto = new Foto();
}