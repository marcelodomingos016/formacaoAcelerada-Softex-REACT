import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'

export default function App() {

  const [valor, setValor] = useState(0)

  function funcAumentar() {
    setValor(valor + 1)
  }

  function funcDiminuir() {
    setValor(valor -1)
  }
  return (
    <>
      <div>Quantidade <b>{valor}</b></div>
      <button onClick={funcAumentar}>Adicionar + 1</button>
      <button onClick={funcDiminuir}>Diminuir - 1</button>
    </>
  );
}
