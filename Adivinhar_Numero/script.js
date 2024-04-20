const min_num = document.querySelector('.min')
const max_num = document.querySelector('.max')
const btn_intervalo = document.querySelector('.def-intervalo')


function confirma_invervalo(){
    // Validação do intervalo
    if(!(min_num.value && max_num.value) || (min_num.value==max_num.value) || (min_num.value>max_num.value)){
        alert('Insira um intervalo válido!')
        return
    }
    const resIntervalo = document.querySelector('.interval')
    const tituloIntervalo = document.querySelector('.int-titulo')
    tituloIntervalo.innerHTML = `Intervalo Definido!`
    resIntervalo.innerHTML = `Agora chute um número do <b>${min_num.value}</b> ao <b>${max_num.value}</b>`
}

btn_intervalo.addEventListener('click',(e)=>{
    e.preventDefault()
    confirma_invervalo()
})