"use strict";
exports.__esModule = true;
var Pessoa_1 = require("./Pessoa");
var Aluno_1 = require("./Aluno");
var professor_1 = require("./professor");
var p;
p = new Pessoa_1.Pessoa();
p.setNumRegistro(1234);
p.setNome("Genereites de Albuquerque Lima Filho Jr");
p.setEmail("gene@generates.com.br");
p.setTelefone("+55 11 98765-4321");
console.log(p);
var a;
a = new Aluno_1.Aluno();
a.setNumRegistro(1533);
a.setNome("Luis Witts");
a.setEmail("luis.witts@outlook.com");
a.setTelefone("+55 11 95630-0083");
a.setCurso("Java Full Stack Galaxy Dick");
a.setAnoMatricula(2019);
console.log(a);
var pr;
pr = new professor_1.Professor();
pr.setNumRegistro(123);
pr.setNome("Isidro de Almeida Botelho");
pr.setEmail("isi@isidrocorp.com");
pr.setTelefone("+55 11 12345-6789");
pr.setValorHora(50);
pr.setNumHoras(40);
console.log(pr);
