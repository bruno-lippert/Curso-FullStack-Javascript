let word = "", modifiedWord = "", letter = "",modifiedLetter = ""

word = prompt("Digite: ")
letter = prompt("Qual letra você deseja modificar?")
modifiedLetter = prompt("Por qual letra você deseja substituir?")

for (let i = 0; i < word.length; i++){
    if(word[i] == letter){
        modifiedWord += modifiedLetter
    }else {
        modifiedWord += word[i]
    }
}

alert("String original: "+word+"\nString modificada: "+modifiedWord)