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

const botaoCadastrar = document.querySelector('.cadastrar-btn');
const nomeAluno = document.querySelector('.aluno-nome');
const raAluno = document.querySelector('.aluno-ra');
const checkboxM = document.querySelector('.sexo-m');
const checkboxF = document.querySelector('.sexo-f');
const idadeAluno = document.querySelector('.aluno-idade');
const mediaAluno = document.querySelector('.aluno-media');

checkboxF.addEventListener('click', () =>{
    checkboxM.checked = false;
});
checkboxM.addEventListener('click', () =>{
    checkboxF.checked = false;
});

botaoCadastrar.addEventListener('click', (e) => {
    e.preventDefault() // Para que não atualize a página
    const sexoAluno = checkboxM.checked ? 'M' : 'F';
    const resultadoAluno = Number(mediaAluno.value)>=6 ? 'Aprovado':'Reprovado';
    console.log(sexoAluno)
    let aluno = new Aluno(nomeAluno.value,raAluno.value, idadeAluno.value, sexoAluno, mediaAluno.value, resultadoAluno)
    
    new Aluno()
    console.log(aluno)
})