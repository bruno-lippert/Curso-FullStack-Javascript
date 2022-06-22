function doChange() {
    alert(window.event.target.value)
}

let sampleInput = document.querySelector("input[name='sample-input']")

sampleInput.addEventListener("change", doChange)    //adiciona o evento e da a ele a função de quando for chamado

let changeEvent = new Event("change")               //objeto event é instanciado com o parametro change

sampleInput.dispatchEvent(changeEvent)              //dispara o a função doChange

sampleInput.removeEventListener("change", doChange) //remove a função doChange