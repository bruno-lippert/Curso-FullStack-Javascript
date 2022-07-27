// o operador spread pode fazer com que uma função possa receber um número indeterminado de parametros, e isso que chamamos de rest params

//aqui uma função apara cumprimentar cada nome do array
// function greetCrew(message, names){
//     names.forEach(personName => console,log(`${message}, ${personName}`));
// }
// greetCrew("Seja bem-vindo", "Arthur", "Jake", "Melissa")
//podemos simplificar esse código

function greetCrew(message, ...names){
    names.forEach(personName => console,log(`${message}, ${personName}`));
}
greetCrew("Seja bem-vindo", ["Arthur", "Jake", "Melissa"])
//quando colocamos o operador spread, ele vai pegar todos os parametros restantes da chamada de uma função e atribuir no parametro do operador spread, e com isso posso tirar os colchetes dos nomes, pois o operador spread faz com que ele receba todos os parametros restantes
//obs: o rest param sempre deve vir no final de uma função
