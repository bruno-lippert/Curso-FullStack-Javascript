class SpacialStation {
    constructor(name, plataformsQuantity){  //usamos o constructor para definir os valores iniciai dos atributos de um objeto e esse metodo é chamado quando criamos uma instacia de uma classe com a palavra new
        this.name= name
        this.plataformsQuantity = plataformsQuantity
    }
    // o constructor é um método nativo mas ele vem vazio
}

//quando dizemos que uma classe foi instânciada, estamos dizendo que um objeto foi criado apartir de uma classe, como no exemplo abaixo
let observatory = new SpacialStation("Observatório", 40)

alert(observatory)


class Spaceship {
    constructor(name, type = "Descoberta") {
        this.name = name
        this.type = type
    }
}

let darwin = new Spaceship("Darwin")
let helmet = new Spaceship("Helmet", "Batalha")

alert(darwin)
alert(helmet)