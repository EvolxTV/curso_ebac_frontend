function Veiculo(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
}

function Carro(marca, modelo, ano, portas) {
  Veiculo.call(this, marca, modelo, ano);
  this.portas = portas;
}

function Moto(marca, modelo, ano, cilindradas) {
  Veiculo.call(this, marca, modelo, ano);
  this.cilindradas = cilindradas;
}

const carro1 = new Carro("Toyoya", "Corolla", 2020, 4);
const carro2 = new Carro("Volkswagen", "Golf", 2019, 4);
const moto1 = new Moto("Honda", "CB1200", 2024, 1000);

console.log(carro1);
console.log(moto1);
console.log(carro2);
