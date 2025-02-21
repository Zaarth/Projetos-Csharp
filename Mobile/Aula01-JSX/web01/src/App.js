import React from 'react';

const nome = "David Mundim";

const elemento = (
  <div>
    <h1>Olá, {nome}</h1>
    <p>Bem vindo ao último ano do curso!</p>
  </div>
);

function App(){
  return elemento;
}

export default App;