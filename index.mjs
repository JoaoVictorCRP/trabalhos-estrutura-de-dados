import { quickSort } from './backend/algoritmos.mjs'
import { carregarArray, stringificarObj} from './backend/crud.mjs';

// Carregando array salvo no localStorage
window.addEventListener('load', () => {
    const alunosSalvos = carregarArray();
    alunos.push(...alunosSalvos)
});

function salvarMudancasNoArray(array) {
    localStorage.setItem('alunos', JSON.stringify(array));
};

export let tipoRelatorio = 0; // Variável que será utilizada para a comunicação entre as páginas, com ela saberemos qual tipo de relatório o usuário deseja visualizar
const alunos = [];
const input = document.querySelector('.opcao');
const ok = document.querySelector('.ok');

ok.addEventListener('click', () => {
    switch(input.value){
        case '1':
            window.location.href = 'cadastro.html';
            break
        case '2':
            tipoRelatorio = 2
            window.location.href = 'relatorio.html';
            break
        case '3':
            alert('3');
            tipoRelatorio = 3
            break;
        case '4':
            alert('4');
            tipoRelatorio = 4
            break;
        case '5':
            alert('5');
            break
        default:
            alert('Insira uma opção válida.')
    };
})
