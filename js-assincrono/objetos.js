const x = {
  nome: "Renan",
  "idade": 30
};

x['nome'] = "JOAO";

x.falar = function() {
  console.log(`Olá ${this.nome}`);
}

const y = x.falar;

console.log(y);

y();

x.falar();

