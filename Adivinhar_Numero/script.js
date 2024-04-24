const minNum_input = document.querySelector('.min');
const maxNum_input = document.querySelector('.max');
const btnIntervalo = document.querySelector('.def-intervalo');
let vidasRestantes = 5;
let numMedio; let ultimoInicio; let ultimoFim;

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
        validaChute(valorChutado,numSorteado)
        // console.log(`Save inicio: ${ultimoInicio}, fim: ${ultimoFim}`)
        dicaBinaria(numSorteado, min, max)
    })
}

function validaChute(chute, alvo){
    if(chute===alvo){
        alert('Você venceu!')
    } else if (chute>alvo){
        alert('Muito alto!')
        vidasRestantes--
    } else {
        alert('Muito baixo!')
        vidasRestantes--;
    }
    if(vidasRestantes===0){
        console.log('Já eras...')
    }
}

function dicaBinaria(alvo, min, max){
    let inicio; let fim

    if((ultimoFim && ultimoInicio) || (ultimoFim && ultimoInicio==0)){
        // [inicio, fim] = [ultimoInicio, ultimoFim] // Desestruturação nã está funcionando.
        inicio = ultimoInicio
        fim = ultimoFim
    } else {
        [inicio, fim] = [min, max]
    }
    // console.log(`Número entre ${inicio} e ${fim}`)
    numMedio = Math.floor((inicio+fim)/2)
    // console.log(`Número médio é: ${numMedio}`)
    if(numMedio==alvo){
        console.log('É isso aí, meu garoto.')
    } else if(numMedio>alvo){
        fim = numMedio-1
    } else {
        inicio = numMedio+1
    }
    // console.log(`inicio é ${inicio}, O fim é: ${fim} `)
    ultimoInicio = inicio;
    ultimoFim = fim;
    exibeDica(inicio, fim)
}

function exibeDica(inicio, fim){
    const snack = document.querySelector('#snackbar')
    snack.className = "show";
    snack.innerHTML = `DICA BINÁRIA: O número está entre <b>${inicio}</b> e <b>${fim}</b>`
    setTimeout(() => { snack.className.replace('show', ""); }, 3000)
}

function confirmaInvervalo(){
    // Validação do intervalo
    let menor = Number(minNum_input.value)
    let maior = Number(maxNum_input.value)
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