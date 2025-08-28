class Estudante {
    constructor(nome, dataNascimento, matricula, codigoEstudante){
        this.nome = nome 
        this.dataNascimento = dataNascimento
        this.matricula = matricula
        this.codigoEstudante = codigoEstudante
    }
}

class Disciplina {
    #nome
    #estudantesMatriculados

    constructor (nome){
        this.#nome = nome 
        this.#estudantesMatriculados = []
    }

    matricularEstudantes(estudante){
        if (!(estudante instanceof Estudante)) {
            throw new TypeError("Parametro inválido. Esperando uma instãncia de Estudante");
        }
        if (this.#estudantesMatriculados.length >= 50){
            throw new Error(`Matricula não permitida. Turma de ${this.#nome} está lotada`);
        }
        this.#estudantesMatriculados.push(estudante)
        console.log(`Estudante ${estudante.nome} matriculado com sucesso`); 
    }
}

 const poo = new Disciplina("programação orientada a objetos")
 const joana = new Estudante("Joana", "2005-03-05", "555", "E20245")

 try {
    poo.matricularEstudantes(joana)
    poo.matricularEstudantes({nome: "objeto qualquer"})
    console.log("Este log não será exibido");
    
 } catch (error) {
    console.error('--- OCORREU UM ERRO ---');
    console.error(`Tipo do Erro ${error.name}`);
    console.error(`Mensagem: ${error.message}`);  
 }finally {
    console.log("--- Bloco de matricula finalizado ---");
    
 }