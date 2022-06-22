function addNewPhone(){
    const phoneForm = document.querySelector("form#phones") //trás o primeiro elemento do form
    const newPhone = phoneForm.children[0].cloneNode(true)  /*vai clonar o elemento da posição 0 de phoneForm
                                                              o parametro que cloneNode recebe se chama deep e recebe os parametros true e false
                                                              true quer dizer q ira clonar os filhos dos filhos do elemento
                                                              false quer dizer q ele vai clonar apenas o primeiro elemento*/

    const phonePosition = phoneForm.children.length + 1     //verifica a posição do filho
    
    newPhone.querySelector("label").innerText = "Telefone "+ phonePosition +": "    /* novo texto para o label
                                                                                       o innerText é para inserir um texto dentro desse ligamento*/
    phoneForm.appendChild(newPhone)                                   // para anexar o filho
    console.log(phoneForm.children)
}

function printPhones() {
    let message = ""
    const phones = document.querySelectorAll("input[name='phone']")
    phones.forEach((phone, index) => {                                          //função para exibir o alert com os números
        message += "Telefone " +  (index + 1) + ": "+ phone.value + "\n"
    })
    alert(message)
}