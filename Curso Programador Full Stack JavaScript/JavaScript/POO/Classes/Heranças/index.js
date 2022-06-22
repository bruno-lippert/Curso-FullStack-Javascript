class Spaceship {
    constructor(name, maxCrew, maxRecommendedVelocity){
        this.name = name
        this.maxCrew = maxCrew
        this.maxRecommendedVelocity = maxRecommendedVelocity
        this.currentVelocity = 0
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration
        if(this.currentVelocity > this.maxRecommendedVelocity){
            alert("VELOCIDADE MAXIMA ULTRAPASSADA!!\nDiminua ou poderá provocar danos à nave!")
        }
    }
}

class BattleSpaceship extends Spaceship {
    stop(){
        this.currentVelocity = 0
        alert("Recolhendo armas e parando nave de batalha!")
    }
}

class DiscoverySpaceship extends Spaceship {
    stop(){
        this.currentVelocity = 0
        alert("Recolhendo equipamento de nave de descoberta!")
    }
}

class TransportSpaceship extends Spaceship {
    constructor(name, maxCrew, maxRecommendedValue, maxLoadWeight){
        super(name, maxCrew, maxRecommendedValue)
        this.maxLoadWeight = maxLoadWeight
    }

    speedUp(acceleration){
        acceleration /= 2                   //sobrescrita do método
        alert("Incrementando velocidade em " + acceleration + "km/s")
        super.speedUp(acceleration)
    }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("Fenix", 8, 240)
let transportSpaceship = new TransportSpaceship("Transportadora", 4, 100, 400)

darwin.speedUp(210)
fenix.speedUp(230)
transportSpaceship.speedUp(210)

darwin.stop()
fenix.stop()