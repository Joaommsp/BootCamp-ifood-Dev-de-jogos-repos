// First Class Funciont
// Higher Order Functions


// atribuindo uma função a uma variável
function falarMeuNome() {
  console.log("Meu nome é joão")
}

const referenciaNova = falarMeuNome
referenciaNova()
falarMeuNome()

// atribuindo função a uma função

function falarMeuNome1() {
  console.log("Meu nome é joão")
}

function voumalhar() {
  console.log("vou malharkkk")
}

function falarMeuNomeCompleto(falarMeuNome) {
  falarMeuNome()
  console.log("Marcos Melo")
}

falarMeuNomeCompleto(voumalhar)

let meta = function() {
  console.log("Serei gigante")
}

meta()

function nomeDaFuncao() {
  console.log('nomeDafuncao')
}

const nomeDeOutraFuncao = function() {
  console.log('nomeDeOutraFuncao')
}

nomeDaFuncao()
nomeDeOutraFuncao()