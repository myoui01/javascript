/* 
15. 
a. Calcule a média das notas da turma.
b. Identifique os alunos com notas acima da média.
via forEach;
*/

const alunos = [
    { nome: 'João', nota: 8.5 },
    { nome: 'Maria', nota: 7.2 },
    { nome: 'Pedro', nota: 9.0 },
    { nome: 'Ana', nota: 6.8 },
    { nome: 'Carlos', nota: 9.5 }
];

let media = 0;
let tam = alunos.length;

alunos.forEach(function(alunos) {
  console.log("Nome: ", alunos.nome);
  console.log("Nota: ", alunos.nota);
 
  media += alunos.nota/tam;
});

console.log("Média: ", media);

