/* 
2) Faça um programa que receba N (Quantidade de números)
Imprima o maior número par e o menor número ímpar
*/

const { gets, print } = require('./FuncAuxiliar2');

const qtdNumeros = gets();
let maiorPar = null;
let menorImpar = null;

for (let i = 0; i < qtdNumeros; i++) {
    const numero = gets();
    if (numero % 2 === 0) {
        if (maiorPar === null || numero > maiorPar) {
            maiorPar = numero;
        }
    }
    else {
        if (menorImpar === null || numero < menorImpar) {
            menorImpar = numero;
        }
    }
}

print('Maior número par: ' + maiorPar);
print('Menor número ímpar: ' + menorImpar);
