
const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    setTimeout(() => {
    const num = parseInt(Math.random() * 100)
    resolve(num)
    }, 1000)
})

console.log('vai filhão')

promessaDeUmNumeroQualquer
      .then((value) => {
        console.log(value)
        return value + 10
      })
      .then((value) => {
        console.log(value)
        return value * 10
      })
      .then((value) => {
        console.log(value)
      })
      .catch((error) => {
        console.log(error)
      })
      .finally(() => {
        console.log('Finalizou pae')
      })