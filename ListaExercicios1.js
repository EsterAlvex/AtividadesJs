/*
**Exercício 1: Cadastro de Usuário**
- Declare variáveis para armazenar o nome, a idade, o e-mail e se o usuário é um assinante (booleano). Use `const` para os dados que não devem ser alterados e `let` para aqueles que podem ser atualizados. Exiba essas informações no console de forma organizada, usando template strings.
*/
const nome = "Maria" ;
let idade = 17;
let email = "maria@gmail.com";
let isAssinante = true;


/* **Exercício 2: Calculadora de Área de Retângulo**
// - Declare duas variáveis, `base` e `altura`, e atribua valores numéricos a elas. Calcule a área do retângulo (área = base * altura) e armazene o resultado em uma terceira variável chamada `area`. Exiba o resultado no console com uma mensagem clara.
*/

let base = 18;
let altura = 10;
let area = base * altura;
console.log(area);

/*
Exercício 3: Verificador de Maioridade**
// - Declare uma variável `idade` e atribua um valor numérico. Use um operador relacional para verificar se a idade é maior ou igual a 18. Armazene o resultado booleano (true ou false) em uma variável chamada `eMaiorDeIdade`. Exiba a variável `eMaiorDeIdade` no console.

*/

let idade1 = 17;
const eMaiorDeIdade = idade1 >=18;
console.log(eMaiorDeIdade);
/*
Exercício 4: O "Bug" da Soma com Strings**
// - Declare uma variável `valorProduto` com o valor ` "150" ` (como string). Declare uma variável `valorDesconto` com o valor `20` (como number). Tente subtrair o desconto do produto e veja o que acontece. Corrija o problema convertendo a string para número antes da operação e exiba o resultado final no console.

*/

let valorProduto = "150";
let valorDesconto = 20;
let vlProduto = Number(valorProduto);

let valorFinal = valorProduto - valorDesconto;
console.log(valorFinal);

/*
Exercício 5: Par ou Ímpar?**
// - Declare uma variável `numero` e atribua um valor inteiro a ela. Use o operador de módulo (`%`) para verificar se o número é par. Um número é par se o resto da sua divisão por 2 for 0. Armazene o resultado booleano em uma variável `ePar` e exiba no console.

*/
let numero = 10;
let ePar = (numero % 2 ) === 0;
console.log(ePar);

/*
Exercício 6: Verificação de Acesso**
// - Declare duas variáveis booleanas: `usuarioLogado` e `temPermissaoAdmin`. Use o operador lógico `&&` (E) para verificar se o usuário está logado E tem permissão de administrador. Armazene o resultado em uma variável `podeAcessarAreaAdmin` e exiba-a no console.

*/

let usuarioLogado = true;
let temPermissaoAdmin = false;
let podeAcessarAreaAdmin = usuarioLogado && temPermissaoAdmin;

console.log(podeAcessarAreaAdmin);


//Exercício 7: Status de Jogo com Operador Ternário**
// - Declare uma variável `pontuacao` com um valor numérico. Use o operador ternário para criar uma variável `statusDoJogo`. Se a pontuação for maior que 1000, o status deve ser "Jogador VIP". Caso contrário, deve ser "Jogador regular". Exiba o `statusDoJogo` no console.

let pontuacao = 10;
let statusDoJogo = pontuacao >= 1000 ? "Jogador VIP" : "Jogador regular";
console.log(statusDoJogo);

//Exercício 8: Cálculo de IMC (Índice de Massa Corporal)**
// - Declare duas variáveis: `peso` (em kg) e `altura` (em metros). Calcule o IMC usando a fórmula: `IMC = peso / (altura * altura)` ou `IMC = peso / altura ** 2`. Armazene o resultado na variável `imc` e exiba no console, formatando o número para ter apenas duas casas decimais.

let peso = 50;
let altura1 = 1.60;
let imc = peso / (altura * altura);
console.log(imc.toFixed(2));

//Exercício 9: Concatenação de Informações**
// - Declare três variáveis: `primeiroNome`, `ultimoNome` e `anoNascimento`. Concatene essas informações para criar uma frase no seguinte formato: "O usuário [primeiroNome] [ultimoNome] nasceu em [anoNascimento]." Armazene a frase completa em uma variável e exiba no console.

const primeiroNome = "Beatriz";
const ultimoNome = "Alves Ferreira";
const anoNascimento = 2004;

console.log(`O usuario ${primeiroNome} ${ultimoNome}, nascido em ${anoNascimento}`);

//Exercício 10: Cálculo de Juros Simples**
// - Crie um script para calcular juros simples. Declare as variáveis `capitalInicial`, `taxaDeJuros` (em decimal, ex: 5% = 0.05) e `tempoDeAplicacao` (em meses). A fórmula é: `montante = capitalInicial * (1 + taxaDeJuros * tempoDeAplicacao)`. Calcule e exiba o valor do `montante` final.

let capitalInicial = 2500;
let taxaDeJuros = 0.05;
let tempoDeAplicacao = 12;

let montante = capitalInicial * (1 + taxaDeJuros * tempoDeAplicacao);
console.log(montante.toFixed(2));
