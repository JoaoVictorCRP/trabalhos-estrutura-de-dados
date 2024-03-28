function quickSort(array) {
    if(array.length < 2) return array // se for um número apenas, retorne-o
    else {
        const pivot = array[0];
        let maiores = [];
        let menores = [];
        for(let i=1;i<array.length;i++){
            array[i] >= pivot ? maiores.push(array[i]) : menores.push(array[i])
        }
        return quickSort(menores).concat([pivot], quickSort(maiores)) // Olha a recursividade aí meu povo...
    }
}

export function raDesc(array){
    array.array.forEach(element => {
        
    });
}
// const array = [3,10,8,6]
// console.log(quickSort(array))