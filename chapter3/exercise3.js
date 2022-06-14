/*Tabuleiro de Xadrez
Escreva um programa que cria uma string que representa uma grade 8x8,
 usando novas linhas para separar os caracteres. 
 A cada posição da grade existe um espaço ou um caractere "#". 
 Esses caracteres formam um tabuleiro de xadrez. */

/* let size = 32;
let string = '';
for (let y = 1; y <= size; y++) {
    for (let x = 1; x <= size; x++) {
        if (!(x % 2))
            if (!(y % 2))
                string += '#';
            else
                string += ' ';
        else
            if (!(y % 2))
                string += ' ';
            else
                string += '#';
    }
    string +='\n'
}
console.log(string); */

// segunda solução

let size2 = 8;

let board = "";

for (let y = 0; y < size2; y++) {
  for (let x = 0; x < size2; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);