/* Mínimo
O capítulo anterior introduziu a função Math.min que retorna o seu menor argumento. 
Nós podemos reproduzir essa funcionalidade agora. 
Escreva uma função min que recebe dois argumentos e retorna o menor deles. */

function mathMin(a, b) {
    if (a < b)
        return a;
    return b;
}

console.log(mathMin(2, -10));