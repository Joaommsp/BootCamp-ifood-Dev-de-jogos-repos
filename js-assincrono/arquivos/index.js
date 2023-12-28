// ler um arquivo é uma tarefa assícrona 

const fs = require('fs')
const path = require('path')

const filePath = path.resolve(__dirname, 'tarefa.csv')

const promessDaLeituraDoArquivo = fs.promises.readFile(filePath)


  promessDaLeituraDoArquivo
  .then((arquivo) => arquivo.toString('utf-8'))
  .then((textoDoArquivo) => textoDoArquivo.split('\n').slice(1))
  .then((linhasSemOCabecalho) => linhasSemOCabecalho.map((linha) => {
    const [nome, feito] = linha.split(';')
    return {
      nome,
      feito: feito.trim() === 'true'
    }
  }))
  .then((listaDetarefas) => console.log(listaDetarefas))
  .catch((error) => console.log('hhhhiiii deu erro', error))