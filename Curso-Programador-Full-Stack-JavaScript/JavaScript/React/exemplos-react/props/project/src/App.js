import logo from './logo.svg';
import './App.css';
import Item from './Item'

function App() {
  var noticias = [
    { titulo: "Título 1", sub: "Subtítulo 1"},
    { titulo: "Título 2", sub: "Subtítulo 2"}        
  ];

  function message(){
    console.log('Olá')
  }
  return (
    <div>
      {noticias.map((noticia, key) => (
        <Item key={key} titulo={noticia.titulo} sub={noticia.sub} message={message}/>
      ))}
      
    </div>
  );
}

export default App;