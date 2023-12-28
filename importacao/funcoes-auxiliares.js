let entradas = [10, 50, 10]
let i = 0

function gets() {
  let valor = entradas[i]
  i++
  return valor
}

function print(texto) {
  console.log(texto);
}

module.exports = {gets, print}