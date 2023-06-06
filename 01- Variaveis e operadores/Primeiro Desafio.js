/* Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá três variáveis. Sendo elas:
- 1 Preço do combustível;
- 2 Gasto médio de combustível do carro por KM;
- 3 Distância em KM da viagem;

*/

const precoCombustivel = 5.79;
const KmPorLitros =  10;
const distanciaKm = 1500;

const litrosConsumidos = distanciaKm / KmPorLitros;

const valorGasto = litrosConsumidos * precoCombustivel;

console.log('O valor gasto foi:', valorGasto.toFixed(2));

