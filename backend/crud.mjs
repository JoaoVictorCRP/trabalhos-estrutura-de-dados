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
    &nbsp <div class="edit-div"> <button class="edit"> Editar </button> </div>
    &nbsp <div class="del-div"> <button class="del"> Deletar </button> </div>`
}

// TODO: Testar o botão de "excluir" e "editar" como palavras e não icones...