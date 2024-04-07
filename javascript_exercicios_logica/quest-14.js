/*
14. 
a. Use o loop 'for...of' para percorrer a 'listaDeLivros'. Dentro do loop 'for...of' exibe no console o título e o autor de cada livro.
b. Crie também um loop 'for...of' capaz de encontrar um determinado livro com base no título informado. */

const listaDeLivros = [
    {
      id: 1,
      titulo: "Aventuras Fantásticas",
      autor: "Carlos Santos",
      ano: 2020,
    },
    {
      id: 2,
      titulo: "Mistérios Noturnos",
      autor: "Ana Lima",
      ano: 2018,
    },
    {
      id: 3,
      titulo: "Caminho das Estrelas",
      autor: "Pedro Oliveira",
      ano: 2021,
    }
];

for (let atributo of listaDeLivros) {
    console.log("Título:", atributo.titulo);
    console.log("Autor:", atributo.autor);
}

titulo = "Aventuras Fantásticas";

for (let atributo of listaDeLivros) {
    if (atributo.titulo == titulo) {
        console.log(atributo);
    }
}