import React from 'react';
import './Item.css';

export default function Item(props) {
  return (
    <div className='box'>
        <h1>{props.titulo}</h1>
        <h2>{props.sub}</h2>
        <button onClick={props.message}>Teste</button>
    </div>
  );
}