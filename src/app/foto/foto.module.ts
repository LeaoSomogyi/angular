import { NgModule } from "@angular/core";
import { FotoComponent } from "./foto.component";
import { FiltroPorTItulo } from "./foto.pipes";

@NgModule({
    declarations: [
        FotoComponent,
        FiltroPorTItulo
    ],
    exports: [
        FotoComponent,
        FiltroPorTItulo
    ]
})

export class FotoModule {}