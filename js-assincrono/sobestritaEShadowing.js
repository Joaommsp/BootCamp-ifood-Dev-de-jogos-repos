
const pessoa = {
  idade: 18
}

const renan = {
  nome: 'Renan',
  idade: 23,
  __proto__:pessoa
}

console.log(renan.idade)