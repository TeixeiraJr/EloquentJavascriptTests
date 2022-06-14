/* Contando feijões

Escreva uma função countBs que receba uma string como único argumento 
e retorna o número que indica quantos caracteres "B", em maiúsculo, estão presentes na string.

Em seguida, escreva uma função chamada countChar que se comporta de forma parecida com countBs, 
exceto que ela recebe um segundo argumento que indica o caractere que será contado 
(ao invés de contar somente o caractere "B" em maiúsculo).
 Reescreva countBs para fazer essa nova funcionalidade. */

function countBs (word) {
    let count = 0;
    for (let ct = 0; ct < word.length; ct++) {
        if (word.charAt(ct) == 'B') count++
    }
    return count;
}

console.log(countBs('BBc'))

function countChar (word, key) {
    let count = 0;
    for (let ct = 0; ct < word.length; ct++) {
        if (word.charAt(ct) == key) count++
    }
    return count;
}

console.log(countChar('kakkerlak', 'a'));