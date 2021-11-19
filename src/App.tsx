import React from 'react';
import './App.css';
import { Conteudo } from './components/Conteudo';
import { Titulo } from './components/Titulo';
import { Divertidamente } from './components/Divertidamente';

const itens = [
  {nome: "algum nome",
  descricao: "alguma descricao"},
  {nome: "segundo nome",
  descricao: "outra descricao"}
];

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <Titulo />
        <Conteudo />
        {itens.map((item)=>(
          <Divertidamente nome={item.nome} descricao={item.descricao} />
        ))}


      </header>
      
    </div>
  );
}

export default App;
