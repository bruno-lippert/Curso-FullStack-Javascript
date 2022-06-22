let spaceshipName = "", invertedName = "", forbiddenLetter = ""

spaceshipName = prompt("Digite o nome da nave: ")
forbiddenLetter = prompt("Letra proibida: ")

for (let i = spaceshipName.length - 1; i >= 0; i--){
    if(spaceshipName[i] == forbiddenLetter){
        break
    }
    invertedName += spaceshipName[i]
}

alert("Nome original da nave: "+spaceshipName+"\nNome após ocultação: "+invertedName)