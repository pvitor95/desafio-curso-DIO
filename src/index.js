// Desafio: Classificador de nível de Herói

// Objetivo:
// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
// depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:


// Definindo variáveis para nome e experiência (XP) do herói
let nomeHeroi = "Paulo Vitor";  // Nome do herói
let xpHeroi = 6500;        // Experiência do herói

// Variável para armazenar o nível do herói
let nivelHeroi = "";

// Estrutura de decisão para determinar o nível do herói com base no XP
if (xpHeroi < 1000) {
  nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
  nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  nivelHeroi = "Prata";
} else if (xpHeroi >= 5001 && xpHeroi <= 7000) {
  nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
  nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  nivelHeroi = "Imortal";
} else if (xpHeroi >= 10001) {
  nivelHeroi = "Radiante";
}

// Exibindo a mensagem final com o nome e nível do herói
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
