const minNum = document.querySelector('.min')
const maxNum = document.querySelector('.max')
const btnIntervalo = document.querySelector('.def-intervalo')

function addFormChute(){
    const formChute = document.querySelector('.form-chute');
    // Exibindo o label
    // const label = document.querySelector('.label-cht')
    // label.style.display = block;
    // Adicionando o input
    const input = document.createElement('input');
    input.className = "input-chute";
    input.type = 'number';
    // Adicionando o botão
    const btnSubmit = document.createElement('button');
    btnSubmit.type = 'submit';
    formChute.appendChild(input, btnSubmit);
    // <input type="number" class="input-chute">
    // <button type="submit">Ok</button>
}

function confirmaInvervalo(){
    // Validação do intervalo
    let menor = Number(minNum.value)
    let maior = Number(maxNum.value)
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