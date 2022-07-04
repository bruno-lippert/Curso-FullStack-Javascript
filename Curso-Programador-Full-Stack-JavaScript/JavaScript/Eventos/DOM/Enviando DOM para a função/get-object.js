function sayMyFirstName(element) {
    alert("meu primeiro nome é: " + element.value)      //o elemento this no HTML referencia o valor o passando como parametro
}

function sayMyLastName() {
    console.log(window.event)                        /*event é uma variavel global, essa variavel armazena o ultimo evento 
                                                       que foi chamado no DOM
                                                       ele é armazenado em forma de objeto*/
    alert("Meu útimo nome é: " + window.event.target.value)
}