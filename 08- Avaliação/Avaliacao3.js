/*
3) Faça um programa que calcule e imprima o salário a ser transferido para um 
funcionário. 

Para realizar o calculo receba o valor bruto do salário e o adicional dos benefícios.
O salário a ser transferido é calculado da seguinte maneira:

Valor bruto do salário - percentual de imposto mediante a faixa salarial + adicional 
dos beneficios

Para calcular o percentual de imposto, segue as aliquotas

de 0 a 1100 = 5%
de 1100,01 a 2500= 10%
maior que 2500 = 15%
*/

const { gets, print } = require('./FuncAuxiliar3');

const valorSalario = gets();
const valorBeneficios = gets();

function calcPorcent(valor, percentual){
    return valor * (percentual / 100)
}

function pegarAliquota(salario) {
    if (salario >= 0.00 && salario <= 1100.00) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500.00){
        return 10;
    } else {
        return 15;
    }
}

const aliquotaImposto = pegarAliquota(valorSalario);
const valorImposto = calcPorcent(valorSalario, aliquotaImposto);

const valorTransferir = valorSalario - valorImposto + valorBeneficios;

print(valorTransferir);