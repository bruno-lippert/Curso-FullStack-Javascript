let nameShip, option, dobras = 0

nameShip = prompt("Insira o nome da nave")
option = prompt("Deseja entrar em uma dobra espacial?\n1 - Sim\n2 - Não")

while (option == "1") {
    dobras++
    option = prompt("Deseja realizar a próxima dobra?\n1 - Sim\n2 - Não")
}

alert("Nome da nave: "+nameShip+"\nNúmero de dobras: "+dobras)