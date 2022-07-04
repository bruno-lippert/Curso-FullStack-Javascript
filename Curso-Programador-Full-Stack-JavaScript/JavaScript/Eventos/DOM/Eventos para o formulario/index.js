function save() {
    window.event.preventDefault()   //essa linha serve para o submit não ter o seu comportamento padrão quando ele for chamado e assim podendo fazer o alert ser mostrado na tela.
    let name = document.querySelector("input[name='name']").value
    let programmingLang = document.querySelector("select[name='programming-lang']").value
    alert("Nome: " + name + "\nLinguagem de programação: " + programmingLang)
}