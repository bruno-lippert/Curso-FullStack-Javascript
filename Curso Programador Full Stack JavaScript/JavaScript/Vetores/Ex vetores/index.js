const hitchedSpaceships = [
    ["Fenix", 8, true],
    ["Golias", 10, true],
    ["Helmet", 5, false],
    ["Elemental", 3, true],
    ["Darwin", 15, false]
]

let nameFilter = hitchedSpaceships.filter(element => { return element[1] > 9 }).map(element => {
    return element[0]
})

let plataforma = hitchedSpaceships.findIndex(function find(element) {
    return element[2] == false
})

let upCased = hitchedSpaceships.map(element => { return element[0].toUpperCase() })

let message = "Espaçonaves com mais de 9 tripulantes: " + nameFilter.join(", ")
message += "\nPlataforma em processo de engate: "+ (plataforma+1)
message += "\nNomes em caixa alta: " + upCased.join(", ")

alert(message)