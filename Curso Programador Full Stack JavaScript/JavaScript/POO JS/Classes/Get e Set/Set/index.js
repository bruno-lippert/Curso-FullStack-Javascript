class TransporterSpaceship {
    constructor(name){
        this.name = name
        this.currentVelocity = 0
    }

    set velocity (newVelocity){
        if (newVelocity > 120){
            this.currentVelocity = 120
        } else {
            this.currentVelocity = newVelocity
        }
    }
}

let sapceship = new TransporterSpaceship("Tranportador")
sapceship.velocity = 130
console.log(sapceship)