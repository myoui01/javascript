// 01. a. 
let string = "Atividade Desenvolvimento Front-End!";

let numero = 21;
let bool = true;
let nulo = null;
let indefinido;

// b.
console.log("Número: ", typeof numero);
console.log("String: ", typeof string);
console.log("Boolean: ", typeof nulo);
console.log("Null: ", typeof nulo);
console.log("Undefined: ", typeof indefinido);

// c. Ocorre a concatenação dos valores, em vez da soma, porque a string não é lida como um número inteiro. 
string = '10'
console.log("Soma: ", numero + string);

// d. O JavaScript trata automaticamente o valor booleano como 1 se for true e como 0 se for false. 
console.log("Soma: ", numero + bool);
console.log("Subtração: ", numero - bool);
console.log("Multiplicação: ", numero * bool);
console.log("Divisão: ", numero / bool);

// e. O JavaScript trata automaticamente o valor nulo como 0.
console.log("Soma: ", numero + nulo);

// f. Qualquer operação envolvendo um valor undefined resulta em NaN (Not-a-Number).
console.log("Soma: ", numero + indefinido);

/*
g. 
Undefined -> nenhum valor é atribuído à variável declarada, portanto o tipo se torna indefinido.
Null -> representa a ausência de valor.

h.
Var -> tem escopo de função e podem ser redeclaradas no mesmo escopo.
Let -> tem escopo de bloco e não podem ser redeclaradas no mesmo escopo. 

02. Se um loop receber como valor null, undefined ou 0 o loop não será executado, pois os valores serão interpretados como "false".

03. Assim como nos loops, o if (código do bloco de dentro) não será executado, pois os valores serão interpretados como "false".

04. Hoisting: as declarações de variáveis (com var) e funções são movidas para o topo de seus escopos antes da execução do código.  */

console.log(x); // Retorna undefined
var x = 10;
console.log(x); // Retorna 10

/*
05. O comportamento do código se dá por conta do comportamento da variável no escopo global e dentro da função. 
linha 9 -> 291000.00
linha 11 -> 9000
  
06. O código vai dar erro. Porque:
- Está sendo enviado a variável cliente por parâmetro para as funções, que no entanto não tem parâmetros definidos.
- As variáveis estão sendo declaradas no escopo local da função, portanto não poderão ser acessadas fora desses blocos.

07 a 16. */

function convertArray(vetor, callback) {
    let novoVetor = [];
    for (let item of vetor) {
      novoVetor.push(parseInt(item));
    }
    callback(novoVetor);    
}

let valoresTexto = ["10", "20", "30"];
let valoresNumero = [];

convertArray(valoresTexto, function(valoresNumero){
    console.log("Valores texto: ", valoresTexto);
    console.log("Valores número: ", valoresNumero);    
});

/*
08. */
  
let saldo = 10000;
let saldoImpresso = "10000";

if (saldo == saldoImpresso) {
  console.log("Os valores são iguais.");
} else {
   console.log("Os valores são diferentes.");
}

/* Vai imprimir "OS VALORES SÃO IGUAIS", portanto está errado. isso acontece pois o js irá desconsiderar a tipagem. Para corrigir esse problema, é necessário converter os valores string para númericos ou utilizar uma linguagem de tipagem rígida.


11. */

let tarefasPessoais = ["Acordar", "Almoçar", "Dormir"];
let tarefasTrabalho = ["Lol", "Lol pt2", "Lol pt3"];

let listaCombinada = [...tarefasPessoais, ...tarefasTrabalho];

console.log(listaCombinada);

/*
12.
a. Crie uma cópia do objeto usando o operador spread e atribua ela ao 'produtoModificado'.
b. Atualize o nome do produto para "Camiseta Moderna" na cópia 'produtoModificado'.
c. Incremente o valor do estoque em 10 unidades na cópia 'produtoModificado'.
d. Adicione uma nova cor "vermelha" à lista de cores na cópia 'produtoModificado'.
e. Exiba tanto 'produtoOriginal' quanto 'produtoModificado' no console para verificar as diferenças.
f. Use console.log para exibir os objetos resultantes.
g. Agora, crie uma variável chamada objetoAtribuicao, faça a atribuição do objeto original por meio do operador “=” a tal variável. Em seguida, acesse objetoAtribuicao e modifique o valor dos seus atributos nome e  preco. Também imprima os objetos produto e objetoAtribuicao. Por fim, com base no que é impresso, explique o resultado. */

const produtoOriginal = {
  id: 12345,
  nome: "Camiseta Estilizada",
  preco: 29.99,
  estoque: 50,
  cor: "azul",
};

let produtoModificado = { ...produtoOriginal };

produtoModificado.nome = "Camiseta Moderna";
produtoModificado.estoque += 10;
produtoModificado.cor = [...produtoModificado.cor, "vermelho"];
console.log("Produto Original: ", produtoOriginal);
console.log("Produto Modificado: ", produtoModificado);
console.log (
  produtoModificado.nome,
  produtoModificado.preco,
  produtoModificado.estoque,
  produtoModificado.cor
);
let objetoAtribuicao = produtoOriginal;
objetoAtribuicao.nome = "Camiseta Nova";
objetoAtribuicao.preco = 39.99;
console.log("Produto Original: ", produtoOriginal);
console.log("Objeto Atribuicao: ", objetoAtribuicao);

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