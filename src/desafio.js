function calcularSaldo(vitorias, derrotas) {
    // Calcula o saldo de vitórias e derrotas
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    // Verifica o nível baseado no número de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna a mensagem final
    return `O Herói tem um saldo de ${saldoVitorias} e está no nível ${nivel}.`;
}

// Exemplo de uso:
let vitorias = 85;
let derrotas = 40;
let resultado = calcularSaldo(vitorias, derrotas);
console.log(resultado);
