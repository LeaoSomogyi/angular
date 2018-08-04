import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { Foto } from "./foto.model";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class FotoService {

    private cabecalho;
    private url;
    
    constructor(private http:HttpClient){
        this.cabecalho = {
            headers: new HttpHeaders({'Content-type': 'application/json'})
        }

        this.url = 'http://localhost:3000/v1/fotos/';
    }

    listar() : Observable<Foto[]>{
        return this.http.get<Foto[]>(this.url);
    }

    cadastrar(foto: Foto) {
        return this.http.post(this.url, foto, this.cabecalho)
        .pipe(
            map(
                (response) => ({conteudo: 'teste', tipo: 'sucesso', resposta: response})
            )
        );
    }

    remover(id){
        return this.http.delete(this.url + id);
    }

    buscarPorId(id) : Observable<Foto>{
        return this.http.get<Foto>(this.url + id);
    }

    atualizar(foto: Foto) : Observable<HttpResponse<Object>>{
        return this.http.put(this.url + foto._id, foto, {observe: 'response'});
    }
}