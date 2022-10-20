import React, { useState } from 'react'
import Item from '../components/Item';

export default function News() {
  const [hideItem, setHideItem] = useState(false);

  var noticias = [
    { titulo: "Título 1", sub: "Subtítulo 1" },
    { titulo: "Título 2", sub: "Subtítulo 2" }
  ];

  function message() {
    console.log('Olá')
  }

  return (
    <div>
      {hideItem == false
      ? noticias.map((noticia, key) => (
        <Item key={key} titulo={noticia.titulo} sub={noticia.sub} message={message} />
      )) : null}
      <button onClick={() => setHideItem(!hideItem)}>{!hideItem == false ? 'Aparecer' : 'Sumir'}</button>
    </div>
  )
}
