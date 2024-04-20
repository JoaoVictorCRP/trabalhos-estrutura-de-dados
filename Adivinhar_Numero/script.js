const minNum_input = document.querySelector('.min')
const maxNum_input = document.querySelector('.max')
const btnIntervalo = document.querySelector('.def-intervalo')

function addFormChute(){
    const formChute = document.querySelector('.form-chute');
    // Exibindo o label
    const label = document.querySelector('.label-cht')
    label.style.display = 'block';
    // Adicionando o input
    const input = document.querySelector('.input-chute');
    input.style.display='block';
    // input.className = "input-chute";
    // input.textContent = 'OK'
    // input.type = 'number';
    // formChute.appendChild(input);
    // Exibindo o botão de ok
    const btnSubmit = document.querySelector('.btn-ok');
    btnSubmit.style.display = 'block'
}

function confirmaInvervalo(){
    // Validação do intervalo
    let menor = Number(minNum_input.value)
    let maior = Number(maxNum_input.value)
    if(!(menor && maior) || (menor==maior) || (menor>maior)){
        alert('Insira um intervalo válido!')
        return
    }
    const resIntervalo = document.querySelector('.interval')
    const tituloIntervalo = document.querySelector('.int-titulo')
    tituloIntervalo.innerHTML = `Intervalo Definido!`
    resIntervalo.innerHTML = `Agora chute um número do <b>${menor}</b> ao <b>${maior}</b>:`
    addFormChute()
}

btnIntervalo.addEventListener('click',(e)=>{
    e.preventDefault()
    confirmaInvervalo()
})