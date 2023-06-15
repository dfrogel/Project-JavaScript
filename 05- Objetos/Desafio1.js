/*
1- Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por km rodado.
Crie um método que dado a quantidade de km e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMédioPorKm;

    constructor(marca, cor, gastoMédioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMédioPorKm = 1 / gastoMédioPorKm;
    }

    calcularGasto(distanciaKm, precoCombustivel){
        return distanciaKm * this.gastoMédioPorKm * precoCombustivel;
    }
}

const civic = new Carro('Honda', 'Preto', 14);
console.log(civic.calcularGasto(60,5));

const palio = new Carro('Fiat', 'Branco', 10);
console.log(palio.calcularGasto(60, 5));