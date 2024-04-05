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

function Compara(elem1, elem2, atributo){
    if(atributo==2){
        return elem1.nome >= elem2.nome;
    }
    if(atributo==3){
        return elem1.ra >= elem2.ra;
    }
}

const test= [
    {
        "nome": "Joao",
        "ra": 1201,
        "idade": "49",
        "sexo": "M",
        "media": "7",
        "resultado": true
    },
    {
        "nome": "Zequinha de Abreu",
        "ra": 55,
        "idade": "60",
        "sexo": "M",
        "media": "4",
        "resultado": false
    },
    {
        "nome": "Tiago mota dos santos",
        "ra": 79,
        "idade": "44",
        "sexo": "M",
        "media": "9",
        "resultado": true
    }
]

console.log(quickSort(test))