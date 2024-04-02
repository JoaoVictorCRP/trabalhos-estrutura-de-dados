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

let tipoRelatorio = 0; // Variável que será utilizada para a comunicação entre as páginas, com ela saberemos qual tipo de relatório o usuário deseja visualizar
const alunos = [];
const input = document.querySelector('.opcao');
const ok = document.querySelector('.ok');

function setRelatorio(valor){
    tipoRelatorio = valor;
};
function getRelatorio(){
    return tipoRelatorio;
};

export {setRelatorio, getRelatorio};

document.addEventListener('DOMContentLoaded', () => { // Para evitar problemas com as páginas seguintes, devo esperar o DOM carregar o conteúdo antes de executar o script.
    const ok = document.querySelector('.ok');

    ok.addEventListener('click', () => {
        switch(input.value){
            case '1':
                break
            case '2':
                tipoRelatorio = 2
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
    });


    // TO DO: COMPÍLAR TODAS AS PÁGINAS EM UMA SÓ, QUE SERÃO EXIBIDAS NA DIV INFERIOR DE ACORDO COM A OPÇÃO DO USUÁRIO!
});
