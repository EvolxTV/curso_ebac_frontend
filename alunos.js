const alunos = [
  { nome: "Sezimar", nota: 10 },
  { nome: "Beatriz", nota: 7 },
  { nome: "Igor", nota: 4 },
  { nome: "Claudio", nota: 5 },
  { nome: "Flavia", nota: 6 },
  { nome: "Emilia", nota: 2 },
];

const alunosAprovados = alunos.filter(function (item) {
  return item.nota >= 6;
});
console.log(alunosAprovados);
