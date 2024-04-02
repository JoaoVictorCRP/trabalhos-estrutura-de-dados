import { quickSort } from './backend/algoritmos.mjs'
import { carregarArray, stringificarObj} from './backend/crud.mjs';
import { htmlRelatorio } from './relatorio.mjs';

const listaAlunos = JSON.parse(localStorage.getItem('alunos'));
const input = document.querySelector('.opcao');
const ok = document.querySelector('.ok');
const res = document.querySelector('.res');
if(listaAlunos){
    console.log(listaAlunos);
} else {
    console.log('Não foi encontrado no Local storage.')
}

document.addEventListener('DOMContentLoaded', () => { // Para evitar problemas com as páginas seguintes, devo esperar o DOM carregar o conteúdo antes de executar o script.
    const ok = document.querySelector('.ok');

    ok.addEventListener('click', () => {
        console.log(Number(input.value))
        switch(Number(input.value)){
            case 1:
                window.location.href = 'cadastro.html';
                break
            case 2:
                res.innerHTML = htmlRelatorio(2)
                break
            case 3:
                res.innerHTML = htmlRelatorio(3)
                break;
            case 4:
                res.innerHTML = htmlRelatorio(4)
                break;
            case 5:
                alert('5');
                break
            default:
                alert('Insira uma opção válida.')
        };
    });

});
