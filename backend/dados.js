const fs = require('fs');
const path = require('path').resolve()

const students = [
    { nome: 'João', ra: '123', idade: 20, sexo: 'M', media: 7.5, resultado: 'Aprovado' },
    { nome: 'Maria', ra: '456', idade: 21, sexo: 'F', media: 8.0, resultado: 'Aprovado' },
    { nome: 'Pedro', ra: '789', idade: 22, sexo: 'M', media: 6.0, resultado: 'Reprovado' }
];

function saveToCSV(data) {
    let csv = 'nome,ra,idade,sexo,media,resultado\n';  // Header (no hardcode mesmo)
    csv += data.map(obj => Object.values(obj).join(',') ).join('\n');
    fs.writeFileSync(`${path}/backend/alunos.csv`, csv);
    console.log(`Dados salvos - alunos.csv`);
}

function readCSV(filename='alunos.csv') {
    try {
        const dados = fs.readFileSync(filename, 'utf-8');
        const linhas = dados.trim().split('\n'); // Separando linhas
        const header = linhas.shift().split('\n'); // pegando a primeira linha, que é o header

        const alunos = linhas.map(linha => {
            const atributos = linha.split(',');
            const aluno = {};
            header.forEach((chave, index) => {
                aluno[chave] = atributos[index]
            });
            return aluno;
        });

        return alunos;
    } catch (error) {
        console.error(`Erro ao ler os dados dos alunos: ${error}`);
        return [];
    }
}

saveToCSV(students)
const alunos = readCSV('alunos.csv');