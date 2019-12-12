"use strict";
exports.__esModule = true;
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.setNumRegistro = function (numRegistro) {
        this.numRegistro = numRegistro;
    };
    Pessoa.prototype.getNumRegistro = function () {
        return this.numRegistro;
    };
    Pessoa.prototype.setNome = function (nome) {
        this.nome = nome;
    };
    Pessoa.prototype.getNome = function () {
        return this.nome;
    };
    Pessoa.prototype.setEmail = function (email) {
        this.email = email;
    };
    Pessoa.prototype.getEmail = function () {
        return this.email;
    };
    Pessoa.prototype.setTelefone = function (telefone) {
        this.telefone = telefone;
    };
    Pessoa.prototype.getTelefone = function () {
        return this.telefone;
    };
    return Pessoa;
}());
exports.Pessoa = Pessoa;
