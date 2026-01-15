"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa = /** @class */ (function () {
    function Pessoa(cpf, idade) {
        this.cpf = cpf;
        this.idade = idade;
    }
    Pessoa.prototype.apresentar = function () {
        console.log("meu cpf ".concat(this.cpf));
        console.log("minha idade ".concat(this.idade));
    };
    return Pessoa;
}());
var p1 = new Pessoa("71272773469", 20);
p1.apresentar();
