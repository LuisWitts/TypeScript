import { Pessoa } from "./Pessoa";

export class Professor extends Pessoa{
    
    private valorhora: number;
    private numhoras: number;
    private areaformação: string;

    public setValorHora(valorhora: number): void{
        this.valorhora = valorhora;
    }
    public getValorHora(): number{
        return this.valorhora;
    }
    public setNumHoras(numhoras : number): void{
        this.numhoras = numhoras;
    }
    public getNumHoras(): number{
        return this.numhoras;
    }
    public setAreaFormação(areaformação : string): void{
        this.areaformação = areaformação ;
    }
    public getAreaFormação(): string{
        return this.areaformação;
    }
}