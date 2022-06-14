/* FizzBuzz
Escreva um programa que imprima usando console.log() t
odos os números de 1 a 100 com duas exceções. 
Para números divisíveis por 3, imprima Fizz ao invés do número, 
e para números divisíveis por 5 (e não 3), imprima Buzz.

Quando o programa estiver funcionando, 
modifique-o para imprimir FizzBuzz para números que são divisíveis ambos por 3 e 5 
(e continue imprimindo Fizz e Buzz para números divisíveis por apenas um deles). */

// primeira versão
/* for (let ct = 0; ct < 100; ct++) {
    if (ct % 3 == 00 && ct % 5 == 0)
    console.log('fizz buzz');
    else if (ct % 3 == 0)
        console.log('fizz');
    else if (ct % 5 == 0)
        console.log('buzz');
    else
        console.log(ct); 
} */

// segunda versão
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}