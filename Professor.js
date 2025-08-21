export class Professor {
    constructor(nome, idFuncional){
        this.nome = nome
        this.idFuncional = idFuncional
        this.disciplinas = []
    }

    atribuirDisciplinas(NomeDisciplinas){
        this.disciplinas.push(NomeDisciplinas)
        console.log(`Disciplina de ${NomeDisciplinas} adicionada para o professor ${this.nome}. `);
        
    }
}

const professor1 = new Professor('Tiago', '231314')
const professor2 = new Professor('Barbara', '231334')

professor1.atribuirDisciplinas('JavaScript')
professor1.atribuirDisciplinas('Banco de Dados')

console.log(professor1);


