const minNum_input = document.querySelector('.min');
const maxNum_input = document.querySelector('.max');
const btnIntervalo = document.querySelector('.def-intervalo');
let vidasRestantes = 5;
// let btnSubmit;


// function validarChute(numeroSorteado, min, max){
//     let inputChute = document.querySelector('.input-chute')
//     console.log(inputChute)
//     btnSubmit.addEventListener('click', (e) => {
//         e.preventDefault()
//     })
// }

function gerarNumAleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}

function addFormChute(numSorteado, min, max){
    // Exibindo o label
    const label = document.querySelector('.label-cht')
    label.style.display = 'inline';
    // Exibindo o input
    const input = document.querySelector('.input-chute');
    input.style.display='inline';
    // Exibindo o botão de ok e implementando lógica
    let btnSubmit = document.querySelector('.btn-ok');
    btnSubmit.style.display = 'inline'
    btnSubmit.addEventListener('click', (e) => {
        e.preventDefault()
        valorChutado = Number(input.value)
        buscaBinaria(numSorteado, valorChutado, min, max)
    })
}

function buscaBinaria(alvo, chute, min, max){
    if(chute===alvo){
        alert('Você venceu!')
    } else if (chute>alvo){
        alert('Muito alto!')
    } else {
        alert('Muito baixo!')
    }
}

function confirmaInvervalo(){
    // Validação do intervalo
    let menor = Number(minNum_input.value)
    let maior = Number(maxNum_input.value)
    console.log(menor, maior)
    if((menor!=0 && !(menor && maior)) || (menor==maior) || (menor>maior)){
        // A primeira verificação é um pouco grande, porém é necessária, já que 0 é falsy.
        alert('Insira um intervalo válido!')
        return
    }
    const resIntervalo = document.querySelector('.interval')
    const tituloIntervalo = document.querySelector('.int-titulo')
    tituloIntervalo.innerHTML = `Intervalo Definido!`
    resIntervalo.innerHTML = `Agora chute um número do <b>${menor}</b> ao <b>${maior}</b>:`
    numAleatorio = gerarNumAleatorio(menor, maior)
    console.log(numAleatorio) /// PARA DEBUGAÇÃO APENAS, APAGAR DEPOIS.
    addFormChute(numAleatorio, menor, maior)
}

btnIntervalo.addEventListener('click',(e)=>{
    e.preventDefault()
    confirmaInvervalo()
})
