let namePilot, velocity = 0, confirmVelocity

namePilot = prompt("Qual é seu nome, piloto?")
velocity = prompt("Qual velocidade você gostaria de acelerar a nave?")
confirmVelocity = confirm("Conirmação de "+velocity+"KM/h")

if (confirmVelocity == false) {
    velocity = prompt("Qual velocidade você gostaria de acelerar a nave?")
}

if (velocity <= 0) {
    alert("A nave está parada. Considere partir e aumentar a velocidade") 
}
else if (velocity < 40) {
    alert("Voc~e está devagar, podemos aumetar mais")
}
else if (velocity >= 40 && velocity < 80) {
    alert("Parece uma boa velocidade para manter")
}
else if (velocity >= 80 && velocity < 100) {
    alert("Velocidade alta. Considere diminuir")
}
else if (velocity >= 100) {
    alert("Velocidade perigosa. Controle automático forçado.")
}

alert(""+namePilot+"\n"+velocity+" KM/h")