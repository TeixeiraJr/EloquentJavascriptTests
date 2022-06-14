/*
Recursão
Defina uma função recursiva isEven que satisfaça as condições descritas acima. 
A função deve aceitar um número como parâmetro e retornar um valor Booleano.
*/

function isEven(number) {
    if (number == 0) return true
    else if (number == 1) return false
    else if (number < 0) return isEven (-number)
    else return isEven(number - 2);
}

console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-75));
console.log(isEven(-50));