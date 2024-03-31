import { tipoRelatorio } from "./index.mjs";

const botao_voltar = document.querySelector('.voltar-btn');
const tituloRelatorio = document.querySelector('.titulo-relatorio');

function verificaRelatorio(){
    switch(tipoRelatorio){
        case 2:
            tituloRelatorio.innerHTML += 'Por nome, em ordem crescente'
    }
}

// FIXME (Botão com problemas)
botao_voltar.addEventListener('click', () =>{
    window.location.href='index.html'
})