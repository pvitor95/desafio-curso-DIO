class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método atacar que exibe a mensagem baseada no tipo do herói
    atacar() {
        let ataque = '';

        // Verifica o tipo de herói e define o ataque apropriado
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'fez um ataque comum';
        }

        // Exibe a mensagem com o tipo e o ataque realizado
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi('Arthas', 30, 'guerreiro');
const heroi2 = new Heroi('Merlin', 150, 'mago');
const heroi3 = new Heroi('Ryu', 28, 'monge');
const heroi4 = new Heroi('Naruto', 17, 'ninja');

// Exemplo de ataque para cada herói
heroi1.atacar();  // O guerreiro atacou usando espada
heroi2.atacar();  // O mago atacou usando magia
heroi3.atacar();  // O monge atacou usando artes marciais
heroi4.atacar();  // O ninja atacou usando shuriken
