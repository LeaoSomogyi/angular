import { PipeTransform, Pipe } from "@angular/core";
import { Foto } from "./foto.model";

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTItulo implements PipeTransform{
    
    transform(fotos: Foto[], digitado: string): Foto[]{
        digitado = digitado.toLowerCase();
        return fotos.filter(f => f.titulo.toLowerCase().includes(digitado));
    }

}