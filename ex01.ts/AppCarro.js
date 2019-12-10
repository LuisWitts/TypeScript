"use strict";
exports.__esModule = true;
var carro_1 = require("./carro");
var c1; // aqui apenas declarei uma referencia a um carro , preciso criar o objeto
var c2;
c1 = new carro_1.Carro(); // agora sim , aloquei (reservei ) memória para armazenar as coisas
c2 = new carro_1.Carro();
// vamos preencher os dados 
//c1
c1.ano = 1968;
c1.modelo = "Fusca";
c1.placa = "ABC1234";
c1.ligado = false;
c1.cor = "preto";
//c2
c1.ano = 2019;
c2.modelo = "tesla";
c2.placa = "eua2019";
c2.ligado = false;
c2.cor = "branco";
//vamos manipular o carro com suas operações 
console.log(c1.getInfo());
console.log(c2.getInfo());
c1.andar();
c1.parar();
c2.ligar();
c2.andar();
c2.parar();
c2.desligar();
console.log(c1.getInfo());
console.log(c2.getInfo());
