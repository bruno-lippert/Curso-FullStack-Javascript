// Spread é um recurso disponivel do ES6, que permite expandir os elementos de um objeto iterável
//Objeto iterável são aqueles que a gente consegue percorrer elemento a elemento assim como as strings e arrays

let spaceships = ["Colossus", "Ártemis", "Fênix"]

console.log(...spaceships)                  //os três pontos(...) são para o console.log() entender que os paremetros que serão passados estão em um array e retornar 3 strings

//Outros exemplos
let newSpaceships = [...spaceships, "Puller"]       //seria a mesma coisa que -> let newSpaceships = ["Colossus", "Ártemis", "Fênix", "Puller"], se não colocarmos os três pontos ele vai ser considerado como um array e ira retornar: [["Colossus", "Ártemis", "Fênix"], "Puller"]

//Exemplo com function

function speedUp(velocity, acceleration) {
    return velocity + acceleration
}

let spaceshipAcceleration = [60, 10]

let newVelocity = speedUp(...spaceshipAcceleration)

console.log(newVelocity)