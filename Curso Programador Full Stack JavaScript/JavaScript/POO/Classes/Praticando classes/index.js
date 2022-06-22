class Spaceship {
    constructor (spaceName, crewQuantity) {
        this.name = spaceName
        this.crew = crewQuantity
        this.hitched = false
        this.door = false
    }
    
    hitchedAndDoor(){
        this.hitched = true
        this.door = true
    }
}

function menu(){
    let opt
    while (opt != "1" && opt != "2" && opt != "3"){
        opt = prompt("O que você deseja fazer?\n1 - Realizar engate\n2 - Imprimir naves\n3 - Sair do programa")
    }
    return opt
}

function makeCoupling() {
    let name = prompt("Nome da nave")
    let crew = prompt("Quantidade de tripulantes")
    let spaceship = new Spaceship(name, crew)
    return spaceship
}

function printList(spaceship){
    let spaceList = ""
    spaceship.forEach((spaceship, index) => {
        spaceList += "Indice: " + (index + 1) + "\nNome da nave: "+ spaceship.name + "\nTipulantes: " + spaceship.crew + "\nEngate: "+ spaceship.hitched + "\nPortas: "+ spaceship.door + "\n"
    })
    alert(spaceList)
}

let spaceship = new Spaceship()
let list = []

let opt
while (opt != "3"){
    opt = menu()
    switch(opt){
        case "1":
            let addList = makeCoupling()
            addList.hitchedAndDoor()
            list.push(addList)
            break
        case "2":
            printList(list)

    }
}
 


console.log(spaceship)


/*class Spaceship {
    constructor(spaceName, numberCrew) {
            this.name = spaceName
            this.crew = numberCrew
            this.hitch = false
            this.door = false
    }

    makeCoupling(){
        let name = prompt("Digite o nome da espaço nave")
        let crew = prompt("Digite o número de tripulantes")
        let hitch = (true)
        let door = (true)
        let spaceship = new Spaceship(name, crew, hitch, door)
        return spaceship
    }
}

function menu(){
    let opt
    while(opt != "1" && opt != "2" && opt != "3"){
        opt = prompt("1 - Realizar engate\n2 - Imprimir naves\n3 - Sair do programa")
    }
    return opt
}        

function printList(spaceship){
    let spaceshipList = ""
    spaceship.forEach((spaceship, index) => {
        spaceshipList += (index + 1 ) + "\n"+spaceship.name+"\nTripulantes: "+spaceship.crew
    })
}

function exit(){
    alert("Programa encerrado!")
}

let spaceship = new Spaceship()
let hitchedSpaceships = []

opt = menu()
while(opt != "3"){
    switch(opt){
        case "1":
            let spaceshipToAdd = makeCoupling()
            hitchedSpaceships.push(spaceshipToAdd)
            break
        case "2":
            printList()
            break
    }
}

spaceship.exit()

console.log(spaceship)
*/