let spaceship = {
    velocity: 0,
    speedUp: function (acceleration){
        this.velocity += acceleration
    }
}

function registerSpaceship (){
    spaceship.name = prompt("Insira o nome da nave")
    spaceship.type = prompt("Insira o tipo da nave") 
    spaceship.maxVelocity = prompt("Insira a velocidade máxima da nave em km/s")
}

function accelerate(){
    let acceleration = Number(prompt("O quanto você quer acelerar? (em km/s)"))
    spaceship.speedUp(acceleration)
    if (spaceship.velocity > spaceship.maxVelocity){
        alert("VELOCIDADE MAXIMA ULTRAPASSADA!\nVelocidade atual: "+spaceship.velocity+"\nVelocidade máxima permitida: "+spaceship.maxVelocity)
    }
    else if (acceleration <= spaceship.maxVelocity) {
        alert("Nave acelerada!\nVelocidade atual: "+spaceship.velocity)
    }
}

function _stop(){
    alert("Parando nave!\nNome: "+spaceship.name+"\nTipo: "+spaceship.type+"\nVelicidade: "+spaceship.velocity)
}

function showMenu(){
    do{
        var opc = prompt("Voce quer\n1 - Acelerar\n2 - Parar")
        switch(opc){
            case "1":
                accelerate()
                break
            case "2":
                _stop()
                break
            default:
                alert("Opção inválida!")
        }
    }while(opc != "2")
}

registerSpaceship()
showMenu()