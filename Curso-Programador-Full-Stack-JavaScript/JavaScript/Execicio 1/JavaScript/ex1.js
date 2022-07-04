let nomeVelho, nomeNovo, idVelho, idNovo, diferenca

nomeVelho = prompt("Insira o nome da pessoa mais velha")
idVelho = prompt("Insira a idade da pessoa mais velha")
nomeNovo = prompt("Insira o nome da pessoa mais nova")
idNovo = prompt("Insira a idade da pessoa mais nova")

diferenca = idVelho - idNovo

alert("Nome do mais velho: "+nomeVelho+"\nIdade do mai velho: "+idVelho+"\n\nNome do mais novo: "+nomeNovo+"\nIdade do mais novo: "+idNovo+"\n\nDiferença de idade: "+diferenca)