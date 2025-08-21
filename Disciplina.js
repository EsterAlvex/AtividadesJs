import { Professor } from "./Professor.js";
import { Estudante } from "./Estudante1.js";

export class Disciplina {
    constructor(nome, codigo, cargaHoraria) {
        this.nome = nome
        this.codigo = codigo
        this.cargaHoraria = cargaHoraria
        this.professor = null
        this.EstudantesMatriculados = []
    }

    atribuirProfessor (professor){
        if(professor instanceof Professor){
            this.professor = professor
            console.log(`Professor ${professor.nome} atribuido a disciplina ${this.nome}.`);
        }else{
            console.log("Erro. O objeto fornecido não é uma instância de professor");
        }
    }

    matricularEstudantes (estudante){
         if(estudante instanceof Estudante){
            this.EstudantesMatriculados = this.EstudantesMatriculados
            console.log(`Estudante ${estudante.nome} matriculado em ${this.nome}.`);
        }else{
            console.log("Erro. O objeto fornecido não é uma instância de Estudante");
        }

    }

    listarEstudantes (){

    }
}

const professor1 = new Professor('Tiago', '231314')
const professor2 = new Professor('Barbara', '231334')

const joao = new Estudante("João Silva", "2023001", "2005-03-15");
const maria = new Estudante("Maria Souza", "2023002", "2006-07-20");

const logica = new Disciplina("Lógica Js", "LOG101", 24);
const jspoo = new Disciplina("JavaScript POO", "POO101", 24);

logica.atribuirProfessor(professor1)
jspoo.atribuirProfessor(professor2)

logica.matricularEstudantes(joao)

console.log(`A disciplina de ${logica.nome} é lecionada por ${logica.professor.nome}`);
