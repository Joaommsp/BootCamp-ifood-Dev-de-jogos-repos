
function Pessoa(nome, idade) {
  this.nome = nome
  this.idade = idade
}

Pessoa.prototype.falar = function() {
  console.log(`Meu nome é ${this.nome}`)
}

const carro = {
  carro: 'Camaro SS'
}

Pessoa.prototype.gritar = function() {
  console.log('eiiiiiiiiiiiiiiiii ' + this.nome)
}

const joao = new Pessoa("joão", 34)

joao.__proto__ = carro

console.log(joao.carro)