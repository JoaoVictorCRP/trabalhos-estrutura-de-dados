import { quickSort } from './backend/algoritmos.mjs'
import { carregarArray, stringificarObj} from './backend/crud.mjs';

class Aluno {
    constructor(nome, ra, idade, sexo, media, resultado) {
        this.nome = nome;
        this.ra = ra;
        this.idade = idade;
        this.sexo = sexo;
        this.media = media;
        this.resultado = resultado;
    }

    toHTML(){
        return `<p>Nome: ${this.nome}, RA: ${this.ra}, Idade: ${this.idade}, Sexo: ${this.sexo}, Média: ${this.media}, Resultado: ${this.resultado ? 'Aprovado' : 'Reprovado'}</p>`;
    }
};

// Carregando array salvo no localStorage
window.addEventListener('load', () => {
    const alunosSalvos = carregarArray();
    alunos.push(...alunosSalvos)
});

function salvarMudancasNoArray(array) {
    localStorage.setItem('alunos', JSON.stringify(array));
};

const alunos = [];
const input = document.querySelector('.opcao');
const ok = document.querySelector('.ok');
ok.addEventListener('click', () => {
    console.log('du')
    switch(input.value){
        case '1':
            alert('1');
            break
        case '2':
            alert('2');
            break
        case '3':
            alert('3');
            break;
        case '4':
            alert('4');
            break;
        case '5':
            alert('5');
            break
        default:
            alert('Insira uma opção válida.')
    };
})


// addButton.addEventListener('click', () => {
//     let nome = prompt('Nome do aluno: ');
//     let ra = prompt(`RA do aluno: `);
//     let idade = prompt(`idade do aluno: `);
//     let sexo = prompt(`Sexo do aluno: `);
//     let media = Number(prompt('Média do aluno: '));
//     let aluno = new Aluno(nome,ra,idade,sexo,media, (media>=6));
//     alunos.push(aluno);
//     salvarMudancasNoArray(alunos);
// });