export function carregarArray() {
    const arraySalvo = localStorage.getItem('alunos');
    return arraySalvo ? JSON.parse(arraySalvo) : []
}
export function stringificarObj(obj) {
    return `<br>Nome: ${obj.nome}, \
    RA: ${obj.ra}, \
    Idade:${obj.idade}, \
    Sexo: ${obj.sexo}, \
    Média: ${obj.media}, \
    Resultado: ${obj.resultado ? 'Aprovado' : 'Reprovado'}\
    &nbsp <button class="del"> <img class="trash-icon" src="./images/trash.png"> </button>`
}

// TODO: Testar o botão de "excluir" e "editar" como palavras e não icones...