import { Pessoa } from "./Pessoa";

export class Aluno extends Pessoa{
    
    private curso: string;
    private anoMatricula: number;

    public setCurso(curso: string): void{
        this.curso = curso;
    }
    public getCurso(): string{
        return this.curso;
    }
    public setAnoMatricula(anom : number): void{
        this.anoMatricula = anom;
    }
    public getAnoMatricula(): number{
        return this.anoMatricula;
    }
}