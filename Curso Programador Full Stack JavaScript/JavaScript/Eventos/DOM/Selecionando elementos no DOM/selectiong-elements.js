function show() {
    let elements = document.getElementById("name")
    console.log(elements.value)
    let elements2 = document.getElementsByName("phone")
    console.log(elements2[1].value)
}

let elements = document.querySelectorAll("div#phones input[name='phone']")
    console.log(elements[1].value)       //chama o elemento que quer vizualisar pela query

    let elements2 = document.getElementsByTagName("input")
    console.log(elements2.value)        //chama o elemento que quer vizualisar pela tag