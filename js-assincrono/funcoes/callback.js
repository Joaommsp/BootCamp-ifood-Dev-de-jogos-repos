function adicao(x, y) {
  return x + y
}

function multiplicacao(x, y) {
  return x * y
}


function calculadora(x, opr, y) {
  console.log(opr(x, y))
}

calculadora(10, adicao, 20)
calculadora(10, multiplicacao, 20)