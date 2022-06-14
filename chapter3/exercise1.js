// Triângulo com Loop
// Escreva um programa que faça sete chamadas a console.log() para retornar o seguinte triângulo:

let triangle = '';

do {
    triangle += '#';
    console.log(triangle); 
} while (triangle.length < 8);

// Solução oficial

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);