"use strict";
exports.__esModule = true;
var Carro = /** @class */ (function () {
    function Carro() {
    }
    Carro.prototype.getPlaca = function () {
        return this.placa;
    };
    Carro.prototype.setPlaca = function (_placa) {
        this.placa = _placa;
    };
    Carro.prototype.getCor = function () {
        return this.cor;
    };
    Carro.prototype.setCor = function (_cor) {
        this.cor = _cor;
    };
    Carro.prototype.getAno = function () {
        return this.ano;
    };
    Carro.prototype.setAno = function (_ano) {
        if (_ano < 1900 || _ano > 2100) {
            console.log("ei ! valor invalido ");
        }
        else {
            this.ano = _ano;
        }
    };
    Carro.prototype.getModelo = function () {
        return this.modelo;
    };
    Carro.prototype.setModelo = function (_modelo) {
        this.modelo = _modelo;
    };
    Carro.prototype.getLigado = function () {
        return this.ligado;
    };
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
        info = "CARRO :" + this.modelo + " / " + this.ano + " / " + this.placa + " /" + this.cor + " /  ";
        return info;
    };
    return Carro;
}());
exports.Carro = Carro;
