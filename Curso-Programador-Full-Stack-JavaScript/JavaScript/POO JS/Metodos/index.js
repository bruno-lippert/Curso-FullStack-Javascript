class Spaceship {
    constructor(name){
        this.name = name
        this.velocity = 0
    }

    speedUp(acceleration){
        this.velocity += acceleration
    }
}

let artemis = new Spaceship("Ártemis")

artemis.speedUp(10)
console.log(artemis)
artemis.speedUp(15)
console.log(artemis)