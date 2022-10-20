import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Counter() {
    const [counter, setcounter] = useState(0);

    // useEffect(() => {
    //   console.log('ABC')  //é chamado quando o componente é montado e atualizado
    //   return () => console.log('Componente desmontado')// para chamar o use efect quando o componente for desmontado
    // }, []) // com o segundo parâmetro ([]), o useEffect só é chamado quando o componente for montado, podemos colocar o useState dentro dos colchetes([counter]), e assim o useEffect é chamado apenas quando counter for alterado

    const increment = () => {
        setcounter(counter + 1);
    }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={increment}>Aumentar</button>
    </div>
  )
}
