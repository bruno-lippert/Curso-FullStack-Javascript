/* function newSpaceVelocity(spaceVelocity, printer){
    let newVelocity = spaceVelocity -20
    printer(newVelocity)
    return newVelocity
}

let printerVelocity = velocity => {
    alert("Nova velocidade da nave: " + velocity + "km/s")
}

let spaceVelocity = 150
let novaVelocidade = newSpaceVelocity(spaceVelocity, printerVelocity)

while (novaVelocidade > 0){
        novaVelocidade = newSpaceVelocity(novaVelocidade, printerVelocity)
}

if (novaVelocidade < 0){
    alert("A nave está parada, as comportas podem ser abertas!")
}


        Resolução do professor
*/
function slowDown(velocity, printer) {
    let deceleration = 20

    while (velocity > 0) {
        printer(velocity)
        velocity -= deceleration
    }

    alert("Nave parada. As comportas podem se abertas.")
}

let spaceshipVelocity = 150

slowDown(spaceshipVelocity, function(velocity){
    alert("Velocidade atual: "+velocity)
})