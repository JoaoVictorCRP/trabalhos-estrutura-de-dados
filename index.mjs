import { carregarArray, stringificarObj} from './backend/crud.mjs';
import { htmlRelatorio, tipoRelatorio } from './relatorio.mjs';

const listaAlunos = JSON.parse(localStorage.getItem('alunos'));
const res = document.querySelector('.res');

if(listaAlunos){
    console.log(listaAlunos);
} else {
    console.log('Não foi encontrado no Local storage.')
}

document.addEventListener('DOMContentLoaded', () => { // Para evitar problemas com as páginas seguintes, devo esperar o DOM carregar o conteúdo antes de executar o script.
    const cadastrarBotao = document.querySelector('.cadastrar-btn')
    const relatorioBotao = document.querySelector('.gerar-rel-btn')
    const opcaoRelatorio = document.querySelector('.tipo-rel')


    relatorioBotao.addEventListener('click',() =>{
        switch(opcaoRelatorio.value){
            case 'rel-nome':
                res.innerHTML = htmlRelatorio(2)
                tipoRelatorio(2,listaAlunos);
                break
            case 'rel-ra':
                res.innerHTML = htmlRelatorio(3)
                tipoRelatorio(3,listaAlunos);
                break;
            case 'rel-aprovados':
                res.innerHTML = htmlRelatorio(4)
                break;
            default:
                alert('Nenhuma opção de relatório foi selecionada!');
        }
    });
    cadastrarBotao.addEventListener('click',() =>{
        window.location.href='cadastro.html';
    })
    localStorage.clear()
});