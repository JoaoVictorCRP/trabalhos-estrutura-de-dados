import { getRelatorio, setRelatorio } from "./index.mjs";

const botao_voltar = document.querySelector('.voltar-btn');
const tituloRelatorio = document.querySelector('.titulo-relatorio');

function verificaRelatorio(){
    console.log('oi', getRelatorio())
    switch(aux){
        case 2:
            tituloRelatorio.innerHTML += 'Por nome, em ordem crescente'
    }
}

verificaRelatorio();

botao_voltar.addEventListener('click', () =>{
    window.location.href='index.html'
})