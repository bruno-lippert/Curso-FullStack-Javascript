let departuredDateEntry = prompt("Digite a data de partida (formato DD/MM/YYYY)")

let departureDate = moment(departuredDateEntry, "DD/MM/YYYY") //Aqui ele está convertendo a data para milissegundos para podermos manipula-la

let today = moment() //Aqui a varievel today está recebendo a data atual em milissegundos

let dateDif = today - departureDate //Aqui a variavel dateDif está obtendo a diferença em milissegundos entre as duas datas

/*  
    1 sgundo = 1000 milissegundos
    1 Minuto = 60 segundos
    1 hora = 3600 segundos
    1 dia = 86.400 segundos
*/

let chosenOption = prompt("Escolha como gostaria de exibir o tempo de partida\n1 - Segundos\n2 - Minutos\n3 - Horas\n4 - Dias")

let x
if (chosenOption == "1") {
    x = Math.round(dateDif / 1000)
    alert("Tempo de vôo: "+x+" segundos")   //transformando em segundos
}
else if (chosenOption == "2") {
    x = Math.round(dateDif / 1000 / 60)     //transormando em minutos
    alert("Tempo de vôo: "+x+" minutos")
}
else if (chosenOption == "3") {
    x = Math.round(dateDif / 1000 / 3600)     //transormando em horas
    alert("Tempo de vôo: "+x+" horas")
}
else if (chosenOption == "4") {
    x = Math.round(dateDif / 1000 / 3600 / 24)     //transormando em dias
    alert("Tempo de vôo: "+x+" dias")
}
else {
    alert("Opção inválida!")
}