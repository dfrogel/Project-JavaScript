/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de 
etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo
adequado. 

Código Condição de Pagamento:
1- À vista (débito), recebe 10% de desconto;
2- À vista (dinheiro ou pix), recebe 15% de desconto;
3- Em 2x, preço normal de etiqueta e sem juros;
4- Acima de 2x, preço normal de etiqueta mais juros de 10%;
*/

const precoEtiqueta = 100;
const formaPagamento = 4;

if (formaPagamento === 1){
    console.log('Você irá pagar:', precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaPagamento === 2) {
    console.log('Você irá pagar:', precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaPagamento === 3) {
    console.log('Você irá pagar:', precoEtiqueta);
} else {
    console.log('Você irá pagar:', precoEtiqueta + (precoEtiqueta * 0.1));
}