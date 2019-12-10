export class Carro {
    placa: string;
    cor: string;
    modelo: string;
    ano: number;
    ligado: boolean;


    andar(): void {
        if (this.ligado) {
            console.log("O caroo " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " esta andando...");
        } else {
            console.log("Voce precisa ligar o carro")
            
        }
        //mostrando usando concatenação

    }

    parar(): void {
        if (this.ligado) {
            //mostrando mensagens usando expression languages
            console.log(`O carro ${this.modelo} (${this.placa}) do ano ${this.ano} acabou de parar`);
        } else {
            console.log("voce precisa estar com o carro ligado")
        }
    }
    desligar(): void {
        this.ligado = false
        console.log("o carro desligou ")
    }
    ligar(): void {
        this.ligado = true
        console.log("o carro ligou ")

    }
    getInfo(): string {
        var info : string;
        info = `CARRO :${this.modelo} / ${this.ano} / ${this.placa} /${this.cor} / ${this.ligado} `;
        return info;
    }

}