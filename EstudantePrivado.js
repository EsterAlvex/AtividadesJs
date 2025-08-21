class EstudantePrivado {
    #nome
    #matricula
    #notas

    constructor(nome, matricula){
        this.#nome = nome
        this.#matricula = matricula
        this.#notas = []
    }

    get nome(){
        return this.#nome
    }

    get matricula(){
        return this.#matricula
    }

    get notas(){
        return [...this.#notas]
    }

    set nome (novoNome){
        this.#nome = novoNome
    }
    
    adicionarNota(nota){
        if (nota >= 0 && nota <= 10){
            this.#notas.push(nota)
        }else{
            console.log(`Erro: Nota ${nota} é inválida`);
        }
    }

    calcularMedia(){
        if(this.#notas.length === 0 ) return 0
        const soma = this.#notas.reduce((acc, n) => acc + n, 0)
        return (soma / this.#notas.length).toFixed(2)
    }
}

const joao = new EstudantePrivado("João Encapsulado da Silva", "E2023001")

console.log(joao.nome);
joao.adicionarNota(8)
joao.adicionarNota(9)

console.log(joao.notas);

console.log('média do joão:', joao.calcularMedia());

console.log('\n --- testando o setter de nome --- ');
console.log(`Nome atual: ${joao.nome}`);

joao.nome = 'João da silva sauro'
console.log(`Novo nome: ${joao.nome}`);




