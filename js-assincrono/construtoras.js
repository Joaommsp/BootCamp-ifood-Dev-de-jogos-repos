// PROTOTYPE

const pessoa = {
  genero: "Masculino"
}

const renan = {
  nome: "Renan",
  idade: 30,
  __proto__: pessoa
}

console.log(renan.genero);

// Funções construtoras

function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
}

Pessoa.prototype.falar = function () {
  console.log(`Olá ${this.nome}`) // this é o prório objeto
} 

const joaozin = new Pessoa('João', 48)

joaozin.falar()

class Pessoa2 {

  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }

  falar() {
    console.log(`Meu nome é:  ${this.nome} e tenho ${this.idade}`)
  }

}

let marcos = new Pessoa2("marcos", 90)

marcos.falar()