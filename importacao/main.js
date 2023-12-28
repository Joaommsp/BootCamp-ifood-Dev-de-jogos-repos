
let {gets, print} = require('./funcoes-auxiliares')

let quantidade = gets()

console.log(quantidade)

let maior = 0

for (let index = 0; index < quantidade; index++) {
  let numeroSorteado = gets()
  if(numeroSorteado > maior) {
    maior = numeroSorteado
  }
}


print(maior)