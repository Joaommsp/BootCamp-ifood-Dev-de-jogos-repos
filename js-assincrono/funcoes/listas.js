// ForEach (lembrar que é mais lento que o for convencional)

const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

lista.forEach((value, i , listRef) => {
  console.log(value, i ,listRef)
})

// Filter ( cria uma nova lista a partir doq for filtrado)

const listaDePares = lista.filter((element) => {
  return (element % 2 === 0) // true ou false
})

console.log(listaDePares)

// Map cria um novo objeto a partir de código 

class Pessoa {
  constructor(name) {
    this.name = name
  }
}

const listaDepesoas = [new Pessoa('joão'), new Pessoa('pedro'), new Pessoa('Ana'), new Pessoa('vitor')]

const listaDeNomes = []

// for(let i = 0; i < listaDepesoas.length ; i ++) {
//   const element = listaDepesoas[i]
//   listaDeNomes.push(element.name)
// }

const listaMapeada = listaDepesoas.map((element, i) =>  `${i} : ${element.name}`)

q 
const listaHtml = listaDepesoas.map((element, i) =>  `<li> ${element.name} </li>`)


console.log(listaMapeada)
console.log(listaHtml)


// REDUCE  TRansforma a lista a um único valor

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const somaDeTudo = numeros.reduce((previus, current) => {
  console.log(previus, current)
  return previus + current
}, 5) // inicial value

console.log(somaDeTudo)

// Join , juntando os items e transformando em uma string , usando um seárador

const listinha = [1, 2, 3]

console.log(listinha.map((element) => element + 1).join(';'))