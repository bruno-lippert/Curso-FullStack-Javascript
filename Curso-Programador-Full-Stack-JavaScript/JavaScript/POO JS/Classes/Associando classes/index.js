class Captain {
    constructor(name, age, fligthHours){
        this.name = name
        this.age = age
        this.fligthHours = fligthHours
    }
}

class Spaceship{
    constructor(name, crewQuantity, captainName, captainAge, capitainFlightHours){
        this.name = name
        this.crewQuantity = crewQuantity
        this.captain = new Captain(captainName, captainAge, capitainFlightHours)
    }
}

let spaceship = new Spaceship("Artemis", 13, "Will Grey", 45, 1500)

console.log(spaceship)