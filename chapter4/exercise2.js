/*
Recursão
Nós vimos que o % (operador resto) pode ser usado para testar se um número é par ou ímpar,
 usando % 2 para verificar se ele é divisível por dois. 
 Abaixo, está uma outra maneira de definir se um número inteiro positivo é par ou ímpar:
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