"use strict";
exports.__esModule = true;
var Produto_1 = require("./Produto");
var p1; // aqui apenas declarei uma referencia a um carro , preciso criar o objeto
var p2;
p1 = new Produto_1.Produto(1, "teclado", "branco grande bonito", 100, 5, "fotinha"); // agora sim , aloquei (reservei ) memória para armazenar as coisas
p2 = new Produto_1.Produto(2, "copo", "roxo grande bonito", 5, 200, "fotinha");
console.log(p1.getInfo());
console.log(p2.getInfo());
