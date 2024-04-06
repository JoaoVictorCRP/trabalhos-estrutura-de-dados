export function selectionSort(array, fnComparacao, somenteAprovados=false){
    if(somenteAprovados) array = array.filter(checkarAprovados);

    for(let posSel=0; posSel<array.length - 1;posSel++){ // Loop de posição selecionada (valor isolado)
        let posMenor = posSel+1;
        for(let i = posMenor+1;i<array.length; i++){ // Neste loop olharemos o último elemento também, portanto nada de length-1.
            if(fnComparacao(array[posMenor], array[i])){
                posMenor=i;
            };
        };
        if(fnComparacao(array[posSel], array[posMenor]) ){ // Comparando o valor isolado e o menor dentre os analisados.
            [ array[posSel], array[posMenor] ] = [ array[posMenor], array[posSel] ];
        };
    };
};

function checkarAprovados(elemento){
    return elemento.resultado
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