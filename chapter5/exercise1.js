/* 
Juntando
Use o método reduce juntamente com o método concat para juntar um array 
de arrays em um único array que tem todos os elementos de entrada do array.*/

var arrays = [[1, 2, 3], [4, 5], [6]];

function joinArrays (array) {
    return array.reduce(function(a, b) {
        return a.concat(b)
    })
}

console.log(joinArrays(arrays));

// segunda solução

console.log(arrays.reduce((flat, current) => flat.concat(current), []));