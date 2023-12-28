function rand(min, max) {
  min *= 1000
  max *= 1000
  return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {

    if(typeof msg != 'string') reject(new Error(false))

    setTimeout(() => {
      resolve(msg)
    },tempo)
  })
}

esperaAi("FRASE 1", rand(1, 3))
  .then(resposta => {
    console.log(resposta)
    return esperaAi(222,'FRASE 2', rand(1,3))
  })
  .then(resposta => {
    return resposta + ' vai pro outro THEN'
  })
  .then(resposta => {
    console.log(resposta)
    return esperaAi("FRASE 3", rand(1,3))
  })
  .then(resposta => {
    console.log(resposta)
  })
  .then(() => console.log("Eu sou o último a ser exibido!"))
  .catch(e => {
    console.log('ERROR: ',e)
  })

  console.log("Isso aqui será exibido antes de qulquer um promise")

  