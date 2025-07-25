
// **Exercício 3:**
// Crie uma variável `codigoProduto` e atribua um valor numérico a ela. Use uma estrutura `switch` para exibir o nome do lanche correspondente ao código:
// *   1: "Hambúrguer"
// *   2: "Batata Frita"
// *   3: "Refrigerante"
// *   4: "Milk-shake"
// *   Se o código não for nenhum desses, exiba "Produto não encontrado.".

let codigoProduto = 3

switch (codigoProduto) {
    case 1:
        lanche = "Hamburguer"
        break;
    case 2:
        lanche = "Batata Frita"
        break;
    case 3:
        lanche = "Refrigerante"
        break;
    case 4:
        lanche = "Milk-Shake"
        break;
    default: "Poduto não encontrado"
        break;
}

console.log(lanche);


// **Exercício 4:**
// Escreva um programa que utilize um laço `for` para exibir a tabuada do número 7 (de 7x1 até 7x10) no console.

for(i = 1; i <= 10; i++){
    let numero = 7
    let tabuada = numero * i
    console.log(`tabuada de multip´licação: ${numero} X ${i} = ${tabuada}`);
    
}
// **Exercício 5:**
// Crie um script que use um laço `while` para fazer uma contagem regressiva de 10 até 0, exibindo cada número no console.
let contador = 10
while (contador >= 1){
    console.log(`Contando... ${contador}`);
    contador--
}

// **Exercício 6:**
// Declare um array com 5 notas de um aluno. Use um laço de repetição (`for` ou `for...of`) para calcular a soma de todas as notas e, em seguida, calcule e exiba a média delas.


let notas = [10, 9 , 5 , 7, 4]
let soma = 0
for (let i = 0; i < notas.length; i++ ){
    soma = soma + notas[i]
}
let media = soma / notas.length
console.log(`A soma das notas é: ${soma} e a média das notas é: ${media}`);

// **Exercício 7:**
// Crie uma função chamada `verificarParidade` que recebe um número como parâmetro. A função deve retornar uma string: "Par" se o número for par, ou "Ímpar" se for ímpar. Chame a função com diferentes números e exiba o resultado no console.

function verificarParidade (n1){
    if (n1 % 2 === 0){
        console.log("Par");
    }else{
        console.log("impar");    
    }
console.log(verificarParidade(8));



}

// **Exercício 8:**
// Crie uma função chamada `calcularFatorial` que recebe um número inteiro não negativo como parâmetro e retorna o seu fatorial. O fatorial de um número `n` (representado por `n!`) é a multiplicação de todos os inteiros de 1 a `n`. Ex: `5! = 5 * 4 * 3 * 2 * 1 = 120`. Lembre-se que o fatorial de 0 é 1.

function calcularFatorial (n){
    let resultado = 1

    for (let i = n; i > 1; i--){
        resultado = resultado * i;
    }

    return resultado
}

console.log(calcularFatorial(5));
