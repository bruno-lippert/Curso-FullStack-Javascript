class App {
    constructor() {
        this.spaceship = null;
    }

    start() {
        this.spaceshipData();
        let opt;
        do {
            opt = this.menu();
            this.redirectFeature(opt);
        } while (opt != "3");
        this.printAndExit();
    }

    spaceshipData() {
        let name = prompt("Digite o nome da nave");
        let crewQuantity = prompt("Digite a quantidade de tripulantes");
        let type = this.askSpaceshipType();
        if (type == "1") {
            let weapons = prompt("Quantidade de armas disponíveis");
            this.spaceship = new battleShip(name, crewQuantity, weapons);
        } else {
            let capacity = prompt("Capacidade de tripulantes");
            this.spaceship = new transportShip(name, crewQuantity, capacity);
        }
    }

    askSpaceshipType() {
        let opt;
        while (!["1", "2"].includes(opt)) {
            opt = prompt("Qual o tipo da nave?\n1 - Nave de batalha\n2 - Nave de transporte");
        }
        return opt;
    }

    menu() {
        const message = "1- Acelerar a nave\n2- Trocar a Nave\n3- Imprimir e sair";
        let opt = prompt(message);
        while (!["1", "2", "3"].includes(opt)) {
            opt = prompt(message);
        }
        return opt;
    }

    redirectFeature(chosenOption) {
        switch (chosenOption) {
            case "1":
                this.accelerationSpaceship();
                break;
            case "2":
                this.spaceshipData();
        }
    }

    accelerationSpaceship() {
        let acceleration = Number(prompt("Quanto você quer acelerar?"));
        this.spaceship.speedUp(acceleration);
    }

    printAndExit() {
        alert("Nome: " + this.spaceship.name + "\nQuantidade de tripulantes: " + this.spaceship.crewQuantity + "\nVelocidade atual: " + this.spaceship.currentVelocity);
    }
}
