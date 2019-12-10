export class Carro {
    private placa: string;
    private cor: string;
    private modelo: string;
    private ano: number;
    private ligado: boolean;

    public getPlaca(): string {
        return this.placa;
    }
    public setPlaca(_placa: string): void {
        this.placa = _placa;
    }
    public getCor(): string {
        return this.cor;
    }
    public setCor(_cor: string): void {
        this.cor = _cor;
    }
    public getAno(): number {
        return this.ano;
    }
    public setAno(_ano: number): void {
        if (_ano < 1900 || _ano > 2100) {
            console.log("ei ! valor invalido ");            
        }else{
            this.ano = _ano;
        }
    }
    public getModelo(): string {
        return this.modelo;
    }
    public setModelo(_modelo: string): void {
        this.modelo = _modelo;
    } 
    public getLigado(): boolean {
        return this.ligado;
    }
   


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
        var info: string;
        info = `CARRO :${this.modelo} / ${this.ano} / ${this.placa} /${this.cor} /  `;
        return info;
    }

}