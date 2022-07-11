//A desestruturação é uma expressão JS, que possibilita extrair dados de arrays ou objetos em variaveis distintas

let spaceship = {
    name: "Colossus",
    crewQuantity: 10,
    isHitched: false
}

/*
let spaceshipName = spaceship.name                  em vez de fazermos desse jeito usamos a 
let crewQuantity = spaceship.crewQuantity           desestruturação que ficará da seguinte maneira
*/

let {name: spaceshipName, crewQuantity: crewQuantity} = spaceship

/*quando a variavel tem o mesmo nome da propriedade podemos simplificar ainda mais
Ex: let {name: spaceshipName, crewQuantity} = spaceship
*/

//Com arrays é parecido, só precisamos colocar as variaveis na mesma ordem dos índices que queremos extrair. Ex:

let spaceships = ["Colossus", "Ártemis", "Fênix"]

/*let colossus = spaceships[0]
let artemis = spaceships[1]*/

let [colossus, artemis] = spaceships

//pode ser usado em funções também
/*function printSpaceship([colossus, artemis, fenix]) {
    console.log(colossus, artemis, fenix)
}*/

console.log(colossus, artemis)