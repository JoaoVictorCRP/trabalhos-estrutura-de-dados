import { raDesc } from "./backend/algoritmos.mjs";

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

const alunos = [];
const res = document.querySelector('#res')
const addButton = document.querySelector('#add-btn');
const raDescButton = document.querySelector('.ra-desc')


addButton.addEventListener('click', () => {
    let nome = prompt('Nome do aluno: ');
    let ra = prompt(`RA do aluno: `);
    let idade = prompt(`idade do aluno: `);
    let sexo = prompt(`Sexo do aluno: `);
    let media = Number(prompt('Média do aluno: '));
    let aluno = new Aluno(nome,ra,idade,sexo,media, (media>=6));
    res.innerHTML += aluno.toHTML();
});

raDescButton.addEventListener('click', raDesc(alunos))