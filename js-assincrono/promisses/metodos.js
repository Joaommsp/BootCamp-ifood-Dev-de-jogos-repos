const { triggerAsyncId } = require("async_hooks")
const { error } = require("console")

function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if(typeof msg != 'string') {
        reject(new Error("Errou KKKK"))
        return
      }

      resolve(msg.toUpperCase() + ' Passei na promise')
      return
    }, tempo)
  })
}

// Promise.all Promise.race Promise.resolve Promise.reject


function baixaPagina() {
  const emCache = true; 

  if(emCache) {
    return Promise.resolve('Página em Cache')
  }
  else {
    return esperaAi('Baixei a página', 3000)
  }
}

baixaPagina()
  .then(dados => {
    console.log(dados)
  })
  .catch(e => console.log("ERRO: ",e))