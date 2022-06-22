let spaceship = "Helmet"
let newSpaceship = ""

alert(spaceship)

for(let i = 0; i < spaceship.length; i++) {
    if(spaceship[i] == "e") {
        newSpaceship += "i"
    }else {
        newSpaceship += spaceship[i]
    }
}

alert(newSpaceship)