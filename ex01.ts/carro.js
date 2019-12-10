"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.andar = function () {
        if (this.ligado) {
            console.log("O caroo " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " esta andando...");
        }
        else {
            console.log("Voce precisa ligar o carro");
        }
        //mostrando usando concatenação
    };
    Carro.prototype.parar = function () {
        if (this.ligado) {
            //mostrando mensagens usando expression languages
            console.log("O carro " + this.modelo + " (" + this.placa + ") do ano " + this.ano + " acabou de parar");
        }
        else {
            console.log("voce precisa estar com o carro ligado");
        }
    };
    Carro.prototype.desligar = function () {
        this.ligado = false;
        console.log("o carro desligou ");
    };
    Carro.prototype.ligar = function () {
        this.ligado = true;
        console.log("o carro ligou ");
    };
    Carro.prototype.getInfo = function () {
        var info;
        info = "CARRO :" + this.modelo + " / " + this.ano + " / " + this.placa + " /" + this.cor + " / " + this.ligado + " ";
        return info;
    };
    return Carro;
}());
exports.Carro = Carro;
