class Player {
    power: number;
    health: number;
    name: string;
    
    constructor(name: string, health = 100, power = 10) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    // Metode untuk memperbarui status kesehatan atau kekuatan
    updateStatus(item: string) {
        if (item === 'health') {
            this.health += 10;
        } else if (item === 'power') {
            this.power += 10;
        }
    }

    // Menampilkan status pemain
    showStatus() {
        console.log(`${this.name} / Health = ${this.health}, Power = ${this.power}`);
    }
}

class ShootingGame {
    player1: Player;
    player2: Player;
    constructor(player1: Player, player2: Player) {
        this.player1 = player1;
        this.player2 = player2;
    }

    // Mendapatkan item acak
    getRandomItem() {
        const items = ['health', 'power'];
        return items[Math.floor(Math.random() * items.length)];
    }

    // Mulai permainan
    start() {
        while (this.player1.health > 0 && this.player2.health > 0) {
            console.log('Starting round...');
            this.player1.showStatus();
            this.player2.showStatus();

            // Pemain mendapatkan item acak sebelum menembak
            const item1 = this.getRandomItem();
            const item2 = this.getRandomItem();
            this.player1.updateStatus(item1);
            this.player2.updateStatus(item2);

            // Pemain menyerang satu sama lain
            this.player1.health -= this.player2.power;
            this.player2.health -= this.player1.power;

            console.log(`After attack:`);
            this.player1.showStatus();
            this.player2.showStatus();
        }

        // Menentukan pemenang
        if (this.player1.health <= 0 && this.player2.health <= 0) {
            console.log("Draw!");
        } else if (this.player1.health > 0) {
            console.log(`${this.player1.name} wins!`);
        } else {
            console.log(`${this.player2.name} wins!`);
        }
    }
}

// Contoh penggunaan
const player1 = new Player("Player 1");
const player2 = new Player("Player 2");
const game = new ShootingGame(player1, player2);
game.start();
