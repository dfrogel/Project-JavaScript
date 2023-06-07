
function escrevaNome(nome){
    return 'Meu nome é ' + nome;
}

function verificarIdade(idade){
    if(idade >= 18){
        console.log(escrevaNome('Eduarda') + ' e sou maior de idade');
    } else{
        console.log(escrevaNome('Eduarda') + ' e sou menor de idade');
    }
}

verificarIdade(21);

