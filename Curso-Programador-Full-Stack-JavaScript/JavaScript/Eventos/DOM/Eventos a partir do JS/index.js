document.querySelector("select[name='select-option']").addEventListener("change", function(){
    alert(window.event.target.value)                    
})
//cria um evento no elemento indicado, passando o evento e a função a ser executada qundo esse evento for chamado