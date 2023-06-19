// 2) Crie um programa que seja capaz de percorrer uma lista de números e imprima cada numero par encontrado.

const numeros = [3,5,7,8,9,10,13, 44, 2, 1, 0];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero);
    }
} 
