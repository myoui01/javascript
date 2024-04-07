/* 
16. */

const cidades = [
    'São Paulo',
    'Rio de Janeiro',
    'Belo Horizonte',
    'Salvador',
    'Curitiba',
    'Fortaleza',
    'Brasília',
    'Recife'
];
  
let cidade;
// a. Utilize o método map para criar um novo array contendo o nome de cada cidade como todas as letras maiúsculas.
cidade = cidades.map(cidade => cidade.toUpperCase());
console.log("Cidades em maiúsculas: ", cidade);

// b. Utilize o método filter para criar um novo array contendo as cidades cujos nomes possuam mais de 10 caracteres.
cidade = cidades.filter(cidade => cidade.length > 10);
console.log("\nCidades com mais de 10 caracteres: ", cidade);

// c. Utilize o método reduce para calcular o total de caracteres de todos os nomes de cidades combinados.
cidade = cidades.reduce((i, cidade) => i + cidade.length, 0);
console.log("\nTotal de caracteres de todos os nomes de cidades combinados: ", cidade);

// d. Utilize o método find para encontrar a primeira cidade que comece com a letra 'B'.
cidade = cidades.find(cidade => cidade.startsWith('B'));
console.log("\nPrimeira cidade que começa com 'B': ", cidade);

// e. Utilize o método findIndex para encontrar o índice da primeira cidade que tenha mais de 15 caracteres.
cidade = cidades.findIndex(cidade => cidade.length > 15);
console.log("\nÍndice da primeira cidade com mais de 15 caracteres: ", cidade);

// f. Ao final, exiba os resultados de cada operação no console.
// Imprimi gradualmente p poupar código