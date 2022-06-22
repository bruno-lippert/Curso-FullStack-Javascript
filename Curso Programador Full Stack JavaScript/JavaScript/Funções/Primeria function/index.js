function speedUp(velocity, acceleration) {
    let newVelocity = velocity + acceleration   //assim se declara um function
    alert("Nova velocidade: "+newVelocity)
}

let n1 = Number(prompt("Digite um número: "))
let n2 = Number(prompt("Digite outro número: "))

speedUp(n1, n2)                                 //assim se chama uma function

// PARAMETROS COM VAOR PADRÃO

function greetPilot(name, message = "Olá"){
    alert(message+  ", " + name)
}
                                            //A string "Olá" será exibida caso nenhum valor seja passado para o parametro na chamada
greetPilot("john Mars")