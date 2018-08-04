interface FotoInterface {
    _id: string;
    titulo: string;
    url: string;
    descricao: string;
}

export class Foto implements FotoInterface{
    public _id: string = '';
    public titulo: string = '';
    public url: string = '';
    public descricao: string = '';
}