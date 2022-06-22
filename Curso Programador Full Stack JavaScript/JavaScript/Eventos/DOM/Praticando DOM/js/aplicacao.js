class Aplication {
    submitForm() {
        let type = document.querySelector("input[name = 'tipo']:checked").value
        let area = document.querySelector("input[name = 'area_casa']").value
        let alugado = document.querySelector("input[name = 'alugado']:checked").value
        let imovel = new Imovel(type, area, alugado)
        this.addProperties(imovel)
        this.cleanForm()
    }

    addProperties(imovel) {
        let newList = document.createElement("li")
        newList.setAttribute("id", "newList")
        
        if(imovel.alugado == "Sim") {
            let customElement = document.createElement("span")
            let customContent = document.createTextNode(" ALUGADO ")
            customElement.setAttribute("id", "style")
            //customElement.setAttribute("style", "background-color:red; color:white; padding: 2px; margin: 2px;")
            customElement.appendChild(customContent)
            newList.appendChild(customElement)
            customElement.style.backgroundColor = "red"
            customElement.style.color = "white"
        }

        let conteudo = document.createTextNode("Tipo de residência: "+ imovel.type +" Área da casa: "+ imovel.area)
        newList.appendChild(conteudo)
        document.getElementById("list").appendChild(newList)

        let btnRemove = document.createElement("input")
        btnRemove.setAttribute("type", "button")
        btnRemove.setAttribute("value", "Remover")
        btnRemove.setAttribute("onclick", "aplication.btnRemove(this)")
        newList.appendChild(btnRemove)
    }

    btnRemove(button) {
        let remove = button.parentNode
        document.getElementById("list").removeChild(remove)
    }

    cleanForm(){
        document.querySelector("input[name='area_casa']").value = ""
        document.querySelector("input[name='tipo']").checked = false
        document.querySelector("input[value='Apartamento']").checked = false
        document.querySelector("input[name='alugado']").checked = false
        document.querySelector("input[value='Não']").checked = false
    }
}