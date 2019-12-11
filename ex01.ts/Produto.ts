
/*
codigo   : number
nome     : string
detalhes : string
preco    : number
estoque  : number
linkFoto : string

*/

export class Produto {
    private codigo   : number;
    private nome     : string;
    private detalhes : string;
    private preco    : number;
    private estoque  : number;
    private linkFoto : string;

    public constructor(_co: number, _no: string, _de: string, _pr: number, _es: number,_li:string  ){
        this.codigo   = _co;
        this.nome     = _no;
        this.detalhes = _de;
        this.preco    = _pr;
        this.estoque  = _es;
        this.linkFoto = _li;
    }
    public getCodigo(): number{
        return this.codigo;
    }
    public setCodigo(_co: number): void{
        this.codigo = _co;
    }
    public getNome(): string{
        return this.nome;
    }
    public setNome(_no: string ): void{
        this.nome = _no;
    }
    public getDetalhes(): string{
        return this.detalhes;
    }
    public setDetalhes(_de: string): void{
        this.detalhes = _de;
    }
    public getPreco(): number{
        return this.preco;
    }
    public setPreco(_pr: number): void{
        this.preco = _pr;
    }
    public getEstoque(): number{
        return this.estoque;
    }
    public setEstoque(_es: number): void{
        this.estoque = _es;
    }public getLinkFoto(): string{
        return this.linkFoto;
    }
    public setLinkFoto(_li: string): void{
        this.linkFoto = _li;
    }
    public getInfo():void{
        console.log(`O produto de nome: ${this.nome} - (codigo: ${this.codigo} , contem como detalhes: ${this.detalhes}). Seu preço é de R$:${this.preco} , existem apenas ${this.estoque} peças no estoque , e essa é a imagem do produto ${this.linkFoto}`);

    }
}
