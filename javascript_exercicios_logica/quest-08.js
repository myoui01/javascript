let saldo = 10000;
let saldoImpresso = "10000";

if (saldo == saldoImpresso) {
  console.log("Os valores são iguais.");
} else {
   console.log("Os valores são diferentes.");
}

// Vai imprimir "OS VALORES SÃO IGUAIS", portanto está errado. isso acontece pois o js irá desconsiderar a tipagem. Para corrigir esse problema, é necessário converter os valores string para númericos ou utilizar uma linguagem de tipagem rígida.