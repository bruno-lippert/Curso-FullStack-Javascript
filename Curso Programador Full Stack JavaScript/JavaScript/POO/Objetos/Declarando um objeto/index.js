let spaceship = {
    name: "Fenix",              //name, crewQuantiti e type são as propriedades
    crewQuantiti: 7,            //depois dos dois pontos(:) são os valores
    type: "Batalha"
}

alert(spaceship)
alert(spaceship.type)
alert(spaceship["name"])

//para adicionar mais propriedades ao objeto
spaceship.isHitched = false
spaceship["shieldLevel"] = 100

alert(spaceship["isHitched"])
alert(spaceship.shieldLevel)

/*
    Podemos declarar objetos vazios e depois adicionar os valores. Ex:
    let spaceship = {} ou let spaceship = new Object()
*/