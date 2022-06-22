function adcElemento() {
    let nmrCasa = document.getElementById("nmr_residencia").value
    let bairro = document.getElementById("bairro").value
    let cidade = document.getElementById("cidade").value
    let areaCasa = document.getElementById("area_casa").value

    let newListValue = document.createElement("li")             //cria um novo elemento
    let conteudoDiv = document.createTextNode("Número da casa: "+nmrCasa    //insere o conteúdo no elemento
                                                +"  Bairro: "+bairro
                                                +"  Cidade: "+cidade
                                                +"  Área da casa: "+areaCasa)
    newListValue.appendChild(conteudoDiv)                                        //adiciona o conteudo no elemento

    document.getElementById("house-list").appendChild(newListValue)
    
    let button = document.createElement("input")
    button.setAttribute("onclick", "removerElemento(this)")
    button.setAttribute("type", "button")
    button.setAttribute("value", "Remover")
    newListValue.appendChild(button)
}

function removerElemento(button) {
    let remove = button.parentNode
    document.getElementById("house-list").removeChild(remove)
}