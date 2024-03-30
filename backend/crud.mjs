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
    <button class="del"> <img class="trash-icon" src="./images/trash.png"> </button>`
}