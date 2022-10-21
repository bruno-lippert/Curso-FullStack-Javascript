import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [contador, setContador] = useState(0)
  
  function incrementar() {
    setContador(contador+1)
  }
  return (
    <div>
      <h1>{contador}</h1>
      <button onClick={incrementar}>Aumentar</button>
    </div>
  );
}

export default App;