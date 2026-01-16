export {};
class Pessoa{
    cpf: string;
    idade: number;

    constructor(cpf: string, idade: number){
        this.cpf=cpf;
        this.idade=idade;
    }
      apresentar(): void {
        console.log(`meu cpf ${this.cpf}`);
        console.log(`minha idade ${this.idade}`);
    }

}
const p1 = new Pessoa("71272773469", 20);
p1.apresentar();
//asasasasasasas
//esaewaeaw