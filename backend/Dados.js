const fs = require('fs');

const students = [
    { nome: 'João', ra: '123', idade: 20, sexo: 'M', media: 7.5, resultado: 'Aprovado' },
    { nome: 'Maria', ra: '456', idade: 21, sexo: 'F', media: 8.0, resultado: 'Aprovado' },
    { nome: 'Pedro', ra: '789', idade: 22, sexo: 'M', media: 6.0, resultado: 'Reprovado' }
];

function saveToCSV(data, filename='alunos.csv') {
    const csv = data.map(obj => Object.values(obj).join(',') ).join('\n');
    fs.writeFileSync(filename, csv);
    console.log(`Dados salvos em ${filename}.`)
}

saveToCSV(students)