class Spaceship {
    constructor(name, crewQuantity) {
        this.name = name;
        this.crewQuantity = crewQuantity;
        this.currentVelocity = 0;
    }

    static get deceleration_rate() {
        return 0.17
    }

    speedUp(acceleration) {
        this.currentVelocity += acceleration * (1 - Spaceship.deceleration_rate);
      }
}
