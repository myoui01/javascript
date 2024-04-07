/*
13.
a. Use o loop 'for...in' para percorrer todos os atributos da 'obraDeArte'.
b. Dentro do loop  'for...in' exiba no console o nome do atributo atual.
c. Dentro do loop  'for...in' exiba no console o valor correspondente ao atributo atual. */

const obraDeArte = {
    id: 54321,
    titulo: "Abstração Colorida",
    artista: "Ana Silva",
    ano: 2022,
    tecnica: "Óleo sobre tela",
};

for (let atributo in obraDeArte) {
    console.log("Nome:", atributo);
    console.log("Valor:", obraDeArte[atributo]);
}