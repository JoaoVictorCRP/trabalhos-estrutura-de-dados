export function quickSort(array, filtro) {
    if(array.length < 2) return array // se for um número apenas, retorne-o
    else {
        const pivot = array[0];
        let maiores = [];
        let menores = [];
        for(let i=1;i<array.length;i++){
            Compara(array[i], pivot, filtro) ? maiores.push(array[i]) : menores.push(array[i])
        }
        return quickSort(menores).concat([pivot], quickSort(maiores)) // Olha a recursividade aí meu povo...
    }
}

function Compara(elem1, elem2, atributoComparar){
    switch (atributoComparar){
        case 1:
            return elem1.nome >= elem2.nome;
        case 2:
            return elem2.ra >= elem2.ra;
    }

}