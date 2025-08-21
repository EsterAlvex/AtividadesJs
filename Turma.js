import { Disciplina } from "./Disciplina.js";

class Turma {
    constructor(ano, semestre, codigoTurma){
        this.ano = ano
        this.semestre = semestre
        this.codigoTurma = codigoTurma
        this.disciplinas = []

    }

    adicionarDisciplina(disciplina){
        if (disciplina instanceof Disciplina) {
            this.disciplinas.push(disciplina)
            console.log(`Disciplina ${disciplina.nome} atribuida a turma ${this.codigoTurma}.`);
        }else{
            console.log("Erro. O objeto fornecido não é uma instância de disciplina");
        }
    }

        
}

const logica = new Disciplina("Lógica Js", "LOG101", 24);
const jspoo = new Disciplina("JavaScript POO", "POO101", 24);

const turma = new Turma ("2025/1", "1°", "3747");

turma.adicionarDisciplina(logica)
turma.adicionarDisciplina(jspoo)

console.log(turma);



