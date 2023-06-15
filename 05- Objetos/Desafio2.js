/*
2- Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada Duda, que tenha 50kg e 1,60 de altura, e peça para duda dizer o valor do 
seu IMC;
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC() {
        const imc = this.calcularIMC();

        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Acima do peso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obesidade';
        } else {
            return 'Obesidade mórbida';
        }
    }
}

const duda = new Pessoa('Duda', 50, 1.60);

console.log(duda.classificarIMC());

