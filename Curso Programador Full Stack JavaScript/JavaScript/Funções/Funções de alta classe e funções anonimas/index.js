// funções anonimas - é quando voc~e atribuhi uma função à uma variável
/*
let doubleSpeed = function(velocity){
    return velocity * 2
}

let newVelocity = doubleSpeed(40)

alert(newVelocity)
*/

// HOF-função de alta ordem - é quando se passa uma função como parametro de outra função

function doubleVelocity(velocity, printer) {
    alert("Entrei em doubleVelocity")
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

let printVelocity = velocity => {
    alert("Nova velocidade: "+velocity+"km/s")
}

let newVelocity = doubleVelocity(60, printVelocity)
alert(newVelocity)