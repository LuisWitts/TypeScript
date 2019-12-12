"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Pessoa_1 = require("./Pessoa");
var Professor = /** @class */ (function (_super) {
    __extends(Professor, _super);
    function Professor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Professor.prototype.setValorHora = function (valorhora) {
        this.valorhora = valorhora;
    };
    Professor.prototype.getValorHora = function () {
        return this.valorhora;
    };
    Professor.prototype.setNumHoras = function (numhoras) {
        this.numhoras = numhoras;
    };
    Professor.prototype.getNumHoras = function () {
        return this.numhoras;
    };
    Professor.prototype.setAreaFormação = function (areaformação) {
        this.areaformação = areaformação;
    };
    Professor.prototype.getAreaFormação = function () {
        return this.areaformação;
    };
    return Professor;
}(Pessoa_1.Pessoa));
exports.Professor = Professor;
