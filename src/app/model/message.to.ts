
export class MessageTO {

    public messagem: string;

    public sucesso: boolean;

    public conteudo: any;

    constructor(messagem: string, sucesso: boolean, conteudo: any) {
        this.messagem = messagem;
        this.sucesso = sucesso;
        this.conteudo = conteudo;
    }

}
