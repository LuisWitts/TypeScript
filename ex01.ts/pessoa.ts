export class Pessoa{
    private numRegistro: number;
    private nome       : string;
    private email      : string;
    private telefone   : string;

    public setNumRegistro(numRegistro: number): void{
        this.numRegistro = numRegistro;
    }
    public getNumRegistro(): number{
        return this.numRegistro;
    }
    public setNome(nome: string): void{
        this.nome = nome;
    }
    public getNome(): string{
        return this.nome;
    }
    public setEmail(email: string):void{
        this.email = email;
    }
    public getEmail(): string{
        return this.email;
    }
    public setTelefone(telefone: string): void{
        this.telefone = telefone;
    }
    public getTelefone(): string{
        return this.telefone;
    }
}