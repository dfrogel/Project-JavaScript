/* Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá 5 variáveis. Sendo elas:
- 1 Preço do etanol;
- 2 Preço da gasolina;
- 3 Tipo de combustível que está no carro;
- 4 Gasto médio de combustível do carro por KM;
- 5 Distância em KM da viagem;

*/

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const KmPorLitros = 10;
const distanciaKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaKm / KmPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log('O valor gasto foi:', valorGasto.toFixed(2));

} else { 
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log('O valor gasto foi:', valorGasto.toFixed(2));

}
