function sayMyName(name) {
    console.log('Your name is ' + name);
}

sayMyName('Eduarda');
sayMyName('Gustavo');

function incrementarJuros(valor, percentualJuros) {
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));