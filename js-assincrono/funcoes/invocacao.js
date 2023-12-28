
const pessoa = {
  nome: 'Renan',
  idade: 30
}

function gritar(prefixo) {
  console.log(prefixo, this.nome)
}

gritar.apply(pessoa, ['Olaaaa'])
gritar.call(pessoa, 'Olaaa')

function falar(nome) {
  console.log("Olá " + nome)
}

const joao = new falar('joão')