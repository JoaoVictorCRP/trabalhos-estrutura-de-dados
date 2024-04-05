export function quickSort(array, atributoAComparar) {
    if(array.length < 2) return array // se for um número apenas, retorne-o
    else {
        const pivot = array[0];
        let maiores = [];
        let menores = [];
        for(let i=1;i<array.length;i++){
            Compara(array[i], pivot, atributoAComparar) ? maiores.push(array[i]) : menores.push(array[i])
        }
        return quickSort(menores).concat([pivot], quickSort(maiores)) // Olha a recursividade aí meu povo...
    }
};
function Compara(elem, pivot, atributo){
    if(atributo==2){
        console.log(`${elem.nome} é o elemento, ${pivot.nome} é o pivot.`)
        
        elem.nome >= pivot.nome ? console.log(`${elem.nome} vem DEPOIS de ${pivot.nome}`) : console.log(`${elem.nome} vem ANTES de ${pivot.nome}`);

        return elem.nome >= pivot.nome;
    }
    if(atributo==3){
        return elem.ra >= pivot.ra;
    }
}

const test= [
    {
        "nome": "Tico",
        "ra": 12,
    },
    {
        "nome": "Fer",
        "ra": 88,
    },
    {
        "nome": "Arnaldo",
        "ra": 79,
    },
    {
        "nome": "Baldo",
        "ra":53
    }
]

console.log('Pré-QS: ',test)
console.log('Pós-QS: ',quickSort(test, 2))