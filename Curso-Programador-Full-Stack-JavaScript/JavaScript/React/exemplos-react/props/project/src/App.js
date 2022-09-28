import logo from './logo.svg';
import './App.css';
import Item from './Item'

function App() {
  var noticias = [
    { titulo: "Título 1", sub: "Subtítulo 1"},
    { titulo: "Título 2", sub: "Subtítulo 2"}        
  ];
  return (
    <div>
      {noticias.map((noticia) => (
        <Item titulo={noticia.titulo} sub={noticia.sub}/>
      ))}
    </div>
  );
}

export default App;