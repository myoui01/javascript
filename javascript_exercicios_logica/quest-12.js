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
