const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefa.csv')

async function buscarArquivo() {

  try {

    const arquivo = await fs.promises.readFile(filePath)
    const textoDoArquivo = arquivo.toString('utf-8')
    console.log(textoDoArquivo)
  }
  catch(erro) {
    console.log(erro)
  }
  finally {
    console.log('finalizou')
  }
}

buscarArquivo()

// promessDaLeituraDoArquivo
// .then((arquivo) => arquivo.toString('utf-8'))
// .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
// .then((linhasSemOCabecalho) => linhasSemOCabecalho.map((linha) => {
//   const [nome, feito] = linha.split(';')
//   return {
//     nome,
//     feito: feito.trim() === 'true'
//   }
// }))
// .then((listaDetarefas) => console.log(listaDetarefas))
// .catch((error) => console.log('hhhhiiii deu erro', error))