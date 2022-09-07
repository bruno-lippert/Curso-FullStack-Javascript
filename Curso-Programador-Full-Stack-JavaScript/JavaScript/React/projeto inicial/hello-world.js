ReactDOM.render( //é um método do react responsável por atualizar o DOM, basicamente atualiza nossa tela
    React.createElement(
        'h1', //primeiro o elemento que quer criar
        null, //aqui passamos as propriedades, se não quiser passar nenhuma, colocar apenas null
        'Hello World' //conteúdo do elemento
    ),
    document.getElementById('root') //diz onde queremos injetar o elemento criado
)